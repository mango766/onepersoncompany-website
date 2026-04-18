import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    // Simple password auth
    const password = request.nextUrl.searchParams.get('key')
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = createAdminClient()
    const now = new Date()

    // Today's stats
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString()
    const { count: todayPV } = await supabase
      .from('opc_page_views')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', todayStart)

    // Calculate today's UV (unique IPs)
    const { data: todayIPs } = await supabase
      .from('opc_page_views')
      .select('visitor_ip')
      .gte('created_at', todayStart)
    const todayUV = new Set(todayIPs?.map(r => r.visitor_ip)).size

    // This week
    const weekStart = new Date(now)
    weekStart.setDate(now.getDate() - now.getDay())
    weekStart.setHours(0, 0, 0, 0)
    const { count: weekPV } = await supabase
      .from('opc_page_views')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', weekStart.toISOString())

    // This month
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
    const { count: monthPV } = await supabase
      .from('opc_page_views')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', monthStart)

    // Total
    const { count: totalPV } = await supabase
      .from('opc_page_views')
      .select('*', { count: 'exact', head: true })

    // Country distribution (top 10)
    const { data: countries } = await supabase
      .from('opc_page_views')
      .select('country')
      .not('country', 'is', null)

    const countryMap: Record<string, number> = {}
    countries?.forEach(r => {
      if (r.country) {
        countryMap[r.country] = (countryMap[r.country] || 0) + 1
      }
    })
    const topCountries = Object.entries(countryMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([country, count]) => ({ country, count }))

    // City distribution (top 10)
    const { data: cities } = await supabase
      .from('opc_page_views')
      .select('city, country')
      .not('city', 'is', null)

    const cityMap: Record<string, number> = {}
    cities?.forEach(r => {
      if (r.city) {
        const key = `${r.city}, ${r.country || '?'}`
        cityMap[key] = (cityMap[key] || 0) + 1
      }
    })
    const topCities = Object.entries(cityMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([city, count]) => ({ city, count }))

    // Daily PV for last 30 days
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString()
    const { data: recentViews } = await supabase
      .from('opc_page_views')
      .select('created_at')
      .gte('created_at', thirtyDaysAgo)
      .order('created_at', { ascending: true })

    const dailyPV: Record<string, number> = {}
    recentViews?.forEach(r => {
      const day = r.created_at.slice(0, 10)
      dailyPV[day] = (dailyPV[day] || 0) + 1
    })
    const dailyTrend = Object.entries(dailyPV).map(([date, count]) => ({ date, count }))

    // Top referers
    const { data: referers } = await supabase
      .from('opc_page_views')
      .select('referer')
      .not('referer', 'is', null)

    const refererMap: Record<string, number> = {}
    referers?.forEach(r => {
      if (r.referer) {
        try {
          const host = new URL(r.referer).hostname
          refererMap[host] = (refererMap[host] || 0) + 1
        } catch {
          refererMap[r.referer] = (refererMap[r.referer] || 0) + 1
        }
      }
    })
    const topReferers = Object.entries(refererMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([source, count]) => ({ source, count }))

    return NextResponse.json({
      today: { pv: todayPV || 0, uv: todayUV },
      week: { pv: weekPV || 0 },
      month: { pv: monthPV || 0 },
      total: { pv: totalPV || 0 },
      topCountries,
      topCities,
      dailyTrend,
      topReferers,
    })
  } catch (err) {
    console.error('Stats error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
