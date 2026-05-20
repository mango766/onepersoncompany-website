import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const password = request.nextUrl.searchParams.get('key')
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = createAdminClient()

    // 拉订阅列表（最新的在前）
    const { data: subscribers, error } = await supabase
      .from('opc_subscribers')
      .select('id, email, source, country, city, created_at, confirmed, unsubscribed')
      .order('created_at', { ascending: false })
      .limit(500)

    if (error) {
      console.error('[stats/subscribers] error:', error)
      return NextResponse.json({ error: 'database error', detail: error.message }, { status: 500 })
    }

    // 聚合
    const all = subscribers || []
    const total = all.length
    const active = all.filter(s => !s.unsubscribed).length
    const unsubscribed = all.filter(s => s.unsubscribed).length

    // 按来源统计
    const bySource: Record<string, number> = {}
    for (const s of all) {
      const src = s.source || 'unknown'
      bySource[src] = (bySource[src] || 0) + 1
    }

    // 按国家统计
    const byCountry: Record<string, number> = {}
    for (const s of all) {
      const c = s.country || 'unknown'
      byCountry[c] = (byCountry[c] || 0) + 1
    }

    // 今日新增
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)
    const todayNew = all.filter(s => new Date(s.created_at) >= today).length

    return NextResponse.json({
      summary: {
        total,
        active,
        unsubscribed,
        todayNew,
      },
      bySource,
      byCountry,
      subscribers: all,
    })
  } catch (err) {
    console.error('[stats/subscribers] exception:', err)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}
