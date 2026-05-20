import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const rawEmail: string = typeof body.email === 'string' ? body.email.trim() : ''
    const source: string = typeof body.source === 'string' ? body.source.slice(0, 40) : 'homepage'

    // 基础校验
    if (!rawEmail) {
      return NextResponse.json({ ok: false, error: 'email is required' }, { status: 400 })
    }
    const email = rawEmail.toLowerCase()
    if (email.length > 254 || !EMAIL_RE.test(email)) {
      return NextResponse.json({ ok: false, error: 'invalid email' }, { status: 400 })
    }

    // 反垃圾：明显的临时邮箱域名
    const disposableDomains = ['mailinator.com', 'tempmail.com', 'guerrillamail.com', '10minutemail.com', 'throwaway.email']
    const domain = email.split('@')[1]
    if (disposableDomains.includes(domain)) {
      return NextResponse.json({ ok: false, error: 'disposable email not allowed' }, { status: 400 })
    }

    // 采集元数据
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwarded?.split(',')[0]?.trim() || realIp || null
    const country = request.headers.get('x-vercel-ip-country') || null
    const city = request.headers.get('x-vercel-ip-city')
      ? decodeURIComponent(request.headers.get('x-vercel-ip-city')!)
      : null
    const userAgent = request.headers.get('user-agent') || null
    const referer = request.headers.get('referer') || null

    const supabase = createAdminClient()

    // 已存在？
    const { data: existing } = await supabase
      .from('opc_subscribers')
      .select('id, unsubscribed')
      .eq('email', email)
      .limit(1)
      .maybeSingle()

    if (existing) {
      if (existing.unsubscribed) {
        // 回归订阅：重新激活
        await supabase
          .from('opc_subscribers')
          .update({ unsubscribed: false, updated_at: new Date().toISOString() })
          .eq('id', existing.id)
        return NextResponse.json({ ok: true, status: 'resubscribed' })
      }
      return NextResponse.json({ ok: true, status: 'already_subscribed' })
    }

    // 新订阅
    const { error } = await supabase.from('opc_subscribers').insert({
      email,
      source,
      ip,
      country,
      city,
      user_agent: userAgent,
      referer,
    })

    if (error) {
      console.error('[subscribe] insert failed:', error)
      return NextResponse.json({ ok: false, error: 'database error' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, status: 'subscribed' })
  } catch (err) {
    console.error('[subscribe] exception:', err)
    return NextResponse.json({ ok: false, error: 'internal error' }, { status: 500 })
  }
}
