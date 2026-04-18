import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = createAdminClient()

    // Extract IP
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwarded?.split(',')[0]?.trim() || realIp || '0.0.0.0'

    // Vercel geo headers
    const country = request.headers.get('x-vercel-ip-country') || null
    const city = request.headers.get('x-vercel-ip-city') || null
    const region = request.headers.get('x-vercel-ip-country-region') || null
    const latitude = request.headers.get('x-vercel-ip-latitude')
    const longitude = request.headers.get('x-vercel-ip-longitude')

    // Request body
    const body = await request.json().catch(() => ({}))
    const pagePath = body.page || '/'
    const userAgent = request.headers.get('user-agent') || null
    const referer = request.headers.get('referer') || body.referer || null

    // Dedup: same IP + same page within 24h
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    const { data: existing } = await supabase
      .from('opc_page_views')
      .select('id')
      .eq('visitor_ip', ip)
      .eq('page_path', pagePath)
      .gte('created_at', twentyFourHoursAgo)
      .limit(1)

    if (existing && existing.length > 0) {
      return NextResponse.json({ recorded: false, message: 'duplicate within 24h' })
    }

    // Insert view
    const { error } = await supabase.from('opc_page_views').insert({
      page_path: pagePath,
      visitor_ip: ip,
      city: city ? decodeURIComponent(city) : null,
      region,
      country,
      latitude: latitude ? parseFloat(latitude) : null,
      longitude: longitude ? parseFloat(longitude) : null,
      user_agent: userAgent,
      referer,
    })

    if (error) {
      console.error('Track error:', error)
      return NextResponse.json({ recorded: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ recorded: true })
  } catch (err) {
    console.error('Track error:', err)
    return NextResponse.json({ recorded: false }, { status: 500 })
  }
}
