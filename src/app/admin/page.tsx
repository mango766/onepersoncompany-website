'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Eye, Users, Globe, MapPin, Clock, RefreshCw,
  TrendingUp, ExternalLink, Monitor, Lock, LogIn, Mail
} from 'lucide-react'

interface Stats {
  today: { pv: number; uv: number }
  week: { pv: number }
  month: { pv: number }
  total: { pv: number }
  topCountries: { country: string; count: number }[]
  topCities: { city: string; count: number }[]
  dailyTrend: { date: string; count: number }[]
  topReferers: { source: string; count: number }[]
}

interface Visitor {
  id: number
  page_path: string
  visitor_ip: string
  city: string | null
  region: string | null
  country: string | null
  user_agent: string | null
  referer: string | null
  created_at: string
}

interface VisitorsResponse {
  visitors: Visitor[]
  total: number
  page: number
  totalPages: number
}

interface Subscriber {
  id: number
  email: string
  source: string | null
  country: string | null
  city: string | null
  created_at: string
  confirmed: boolean
  unsubscribed: boolean
}

interface SubscribersResponse {
  summary: { total: number; active: number; unsubscribed: number; todayNew: number }
  bySource: Record<string, number>
  byCountry: Record<string, number>
  subscribers: Subscriber[]
}

interface Subscriber {
  id: number
  email: string
  source: string | null
  country: string | null
  city: string | null
  created_at: string
  confirmed: boolean
  unsubscribed: boolean
}

interface SubscribersResponse {
  summary: { total: number; active: number; unsubscribed: number; todayNew: number }
  bySource: Record<string, number>
  byCountry: Record<string, number>
  subscribers: Subscriber[]
}

// Country code to emoji flag
function countryFlag(code: string) {
  return code
    .toUpperCase()
    .split('')
    .map(c => String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65))
    .join('')
}

// Parse user agent to short device info
function parseUA(ua: string | null): string {
  if (!ua) return 'Unknown'
  if (ua.includes('iPhone')) return 'iPhone'
  if (ua.includes('iPad')) return 'iPad'
  if (ua.includes('Android')) return 'Android'
  if (ua.includes('Mac OS')) return 'Mac'
  if (ua.includes('Windows')) return 'Windows'
  if (ua.includes('Linux')) return 'Linux'
  if (ua.includes('Bot') || ua.includes('bot') || ua.includes('crawl')) return 'Bot'
  return 'Other'
}

function formatTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [adminKey, setAdminKey] = useState('')
  const [stats, setStats] = useState<Stats | null>(null)
  const [visitors, setVisitors] = useState<VisitorsResponse | null>(null)
  const [subs, setSubs] = useState<SubscribersResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [visitorPage, setVisitorPage] = useState(1)
  const [tab, setTab] = useState<'overview' | 'visitors' | 'subscribers'>('overview')

  const fetchData = useCallback(async (key: string) => {
    setLoading(true)
    try {
      const [statsRes, visitorsRes, subsRes] = await Promise.all([
        fetch(`/api/stats?key=${key}`),
        fetch(`/api/stats/visitors?key=${key}&page=${visitorPage}&limit=30`),
        fetch(`/api/stats/subscribers?key=${key}`),
      ])

      if (statsRes.ok) setStats(await statsRes.json())
      if (visitorsRes.ok) setVisitors(await visitorsRes.json())
      if (subsRes.ok) setSubs(await subsRes.json())
    } catch (err) {
      console.error('Fetch error:', err)
    } finally {
      setLoading(false)
    }
  }, [visitorPage])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAdminKey(password)
    setAuthed(true)
  }

  useEffect(() => {
    if (authed && adminKey) {
      fetchData(adminKey)
    }
  }, [authed, adminKey, fetchData])

  // Login screen
  if (!authed) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-violet flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={28} />
            </div>
            <h1 className="text-2xl font-bold text-heading">OPC Analytics</h1>
            <p className="text-sm text-muted mt-2">Enter admin password to view analytics</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Admin Password"
              required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-bg-s border border-line text-heading
                placeholder:text-muted focus:border-primary transition-colors"
            />
            <button type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm
                cursor-pointer border-none bg-gradient-to-br from-primary to-violet
                hover:opacity-90 transition-all">
              <LogIn size={16} />
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-line bg-bg/85 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-violet flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <h1 className="font-semibold text-lg text-heading">OPC Analytics</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab('overview')}
              className={`px-4 py-2 rounded-lg text-sm font-medium border-none cursor-pointer transition-colors
                ${tab === 'overview' ? 'bg-primary/10 text-primary' : 'bg-transparent text-body hover:text-heading'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setTab('visitors')}
              className={`px-4 py-2 rounded-lg text-sm font-medium border-none cursor-pointer transition-colors
                ${tab === 'visitors' ? 'bg-primary/10 text-primary' : 'bg-transparent text-body hover:text-heading'}`}
            >
              Visitors
            </button>
            <button
              onClick={() => setTab('subscribers')}
              className={`px-4 py-2 rounded-lg text-sm font-medium border-none cursor-pointer transition-colors
                ${tab === 'subscribers' ? 'bg-primary/10 text-primary' : 'bg-transparent text-body hover:text-heading'}`}
            >
              Subscribers
            </button>
            <button
              onClick={() => setTab('subscribers')}
              className={`px-4 py-2 rounded-lg text-sm font-medium border-none cursor-pointer transition-colors
                ${tab === 'subscribers' ? 'bg-primary/10 text-primary' : 'bg-transparent text-body hover:text-heading'}`}
            >
              Subscribers
            </button>
            <button
              onClick={() => fetchData(adminKey)}
              disabled={loading}
              className="p-2 rounded-lg text-body hover:text-heading hover:bg-bg-t transition-colors cursor-pointer border-none bg-transparent"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {loading && !stats ? (
          <div className="text-center py-20 text-muted">Loading...</div>
        ) : tab === 'overview' ? (
          <OverviewTab stats={stats} />
        ) : tab === 'visitors' ? (
          <VisitorsTab
            visitors={visitors}
            page={visitorPage}
            onPageChange={(p) => {
              setVisitorPage(p)
              fetchData(adminKey)
            }}
          />
        ) : (
          <SubscribersTab subs={subs} />
        )}
      </main>
    </div>
  )
}

function OverviewTab({ stats }: { stats: Stats | null }) {
  if (!stats) return <div className="text-center py-20 text-muted">No data</div>

  const maxDaily = Math.max(...stats.dailyTrend.map(d => d.count), 1)

  return (
    <div className="space-y-8">
      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard icon={<Eye size={20} />} label="Today PV" value={stats.today.pv} color="text-primary bg-primary/10" />
        <MetricCard icon={<Users size={20} />} label="Today UV" value={stats.today.uv} color="text-violet bg-violet/10" />
        <MetricCard icon={<TrendingUp size={20} />} label="This Week" value={stats.week.pv} color="text-accent bg-accent/10" />
        <MetricCard icon={<Globe size={20} />} label="Total PV" value={stats.total.pv} color="text-emerald bg-emerald/10" />
      </div>

      {/* Daily Trend Chart (simple bar chart) */}
      <div className="rounded-2xl border border-line p-6 bg-bg-s">
        <h3 className="text-lg font-semibold text-heading mb-6 flex items-center gap-2">
          <TrendingUp size={18} className="text-primary" />
          Daily Trend (Last 30 Days)
        </h3>
        <div className="flex items-end gap-1 h-40">
          {stats.dailyTrend.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
              <div
                className="w-full bg-primary/80 rounded-t hover:bg-primary transition-colors min-h-[2px]"
                style={{ height: `${(d.count / maxDaily) * 100}%` }}
              />
              {/* Tooltip */}
              <div className="hidden group-hover:block absolute -top-8 bg-heading text-bg text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                {d.date}: {d.count}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted mt-2">
          <span>{stats.dailyTrend[0]?.date || ''}</span>
          <span>{stats.dailyTrend[stats.dailyTrend.length - 1]?.date || ''}</span>
        </div>
      </div>

      {/* Two columns: Countries + Cities */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-line p-6 bg-bg-s">
          <h3 className="text-lg font-semibold text-heading mb-4 flex items-center gap-2">
            <Globe size={18} className="text-violet" />
            Top Countries
          </h3>
          <div className="space-y-3">
            {stats.topCountries.map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-body">
                  {countryFlag(c.country)} {c.country}
                </span>
                <span className="text-sm font-medium text-heading">{c.count}</span>
              </div>
            ))}
            {stats.topCountries.length === 0 && (
              <p className="text-sm text-muted">No data yet</p>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-line p-6 bg-bg-s">
          <h3 className="text-lg font-semibold text-heading mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-accent" />
            Top Cities
          </h3>
          <div className="space-y-3">
            {stats.topCities.map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-body">{c.city}</span>
                <span className="text-sm font-medium text-heading">{c.count}</span>
              </div>
            ))}
            {stats.topCities.length === 0 && (
              <p className="text-sm text-muted">No data yet</p>
            )}
          </div>
        </div>
      </div>

      {/* Referers */}
      <div className="rounded-2xl border border-line p-6 bg-bg-s">
        <h3 className="text-lg font-semibold text-heading mb-4 flex items-center gap-2">
          <ExternalLink size={18} className="text-emerald" />
          Top Referers
        </h3>
        <div className="space-y-3">
          {stats.topReferers.map((r, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-body">{r.source}</span>
              <span className="text-sm font-medium text-heading">{r.count}</span>
            </div>
          ))}
          {stats.topReferers.length === 0 && (
            <p className="text-sm text-muted">No referrer data yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

function MetricCard({ icon, label, value, color }: {
  icon: React.ReactNode; label: string; value: number; color: string
}) {
  return (
    <div className="rounded-2xl border border-line p-6 bg-bg-s">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-heading">{value.toLocaleString()}</div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  )
}

function VisitorsTab({ visitors, page, onPageChange }: {
  visitors: VisitorsResponse | null
  page: number
  onPageChange: (p: number) => void
}) {
  if (!visitors) return <div className="text-center py-20 text-muted">No data</div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-heading">
          Recent Visitors ({visitors.total.toLocaleString()} total)
        </h3>
      </div>

      <div className="rounded-2xl border border-line overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-bg-t">
                <th className="text-left px-4 py-3 font-medium text-muted">Time</th>
                <th className="text-left px-4 py-3 font-medium text-muted">IP</th>
                <th className="text-left px-4 py-3 font-medium text-muted">Location</th>
                <th className="text-left px-4 py-3 font-medium text-muted">Page</th>
                <th className="text-left px-4 py-3 font-medium text-muted">Device</th>
                <th className="text-left px-4 py-3 font-medium text-muted">Referer</th>
              </tr>
            </thead>
            <tbody>
              {visitors.visitors.map((v) => (
                <tr key={v.id} className="border-b border-line-light hover:bg-bg-s transition-colors">
                  <td className="px-4 py-3 text-body whitespace-nowrap">
                    <Clock size={12} className="inline mr-1 text-muted" />
                    {formatTime(v.created_at)}
                  </td>
                  <td className="px-4 py-3 text-body font-mono text-xs">{v.visitor_ip}</td>
                  <td className="px-4 py-3 text-body whitespace-nowrap">
                    {v.country && (
                      <span className="mr-1">{countryFlag(v.country)}</span>
                    )}
                    {[v.city, v.region, v.country].filter(Boolean).join(', ') || '-'}
                  </td>
                  <td className="px-4 py-3 text-body">{v.page_path}</td>
                  <td className="px-4 py-3 text-body">
                    <Monitor size={12} className="inline mr-1 text-muted" />
                    {parseUA(v.user_agent)}
                  </td>
                  <td className="px-4 py-3 text-body text-xs max-w-[200px] truncate">
                    {v.referer || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {visitors.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
            className="px-4 py-2 rounded-lg text-sm border border-line bg-bg text-body
              hover:bg-bg-t transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <span className="text-sm text-muted px-4">
            Page {page} / {visitors.totalPages}
          </span>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page >= visitors.totalPages}
            className="px-4 py-2 rounded-lg text-sm border border-line bg-bg text-body
              hover:bg-bg-t transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

function SubscribersTab({ subs }: { subs: SubscribersResponse | null }) {
  if (!subs) return <div className="text-center py-20 text-muted">Loading subscribers...</div>

  const { summary, bySource, byCountry, subscribers } = subs

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="总订阅数" value={summary.total} icon={<Mail size={18} />} />
        <StatCard label="活跃订阅" value={summary.active} icon={<Users size={18} />} accent />
        <StatCard label="今日新增" value={summary.todayNew} icon={<TrendingUp size={18} />} />
        <StatCard label="已退订" value={summary.unsubscribed} icon={<ExternalLink size={18} />} />
      </div>

      {/* Breakdown */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl p-5 bg-bg-s border border-line">
          <h3 className="text-sm font-semibold text-heading mb-3">订阅来源</h3>
          {Object.keys(bySource).length === 0 ? (
            <p className="text-xs text-muted">暂无数据</p>
          ) : (
            <div className="space-y-2">
              {Object.entries(bySource)
                .sort(([, a], [, b]) => b - a)
                .map(([src, n]) => (
                  <div key={src} className="flex items-center justify-between text-sm">
                    <span className="text-body">{src}</span>
                    <span className="font-mono text-heading">{n}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="rounded-xl p-5 bg-bg-s border border-line">
          <h3 className="text-sm font-semibold text-heading mb-3">国家分布</h3>
          {Object.keys(byCountry).length === 0 ? (
            <p className="text-xs text-muted">暂无数据</p>
          ) : (
            <div className="space-y-2">
              {Object.entries(byCountry)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 10)
                .map(([c, n]) => (
                  <div key={c} className="flex items-center justify-between text-sm">
                    <span className="text-body">
                      {c !== 'unknown' ? `${countryFlag(c)} ${c}` : '未知'}
                    </span>
                    <span className="font-mono text-heading">{n}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Subscribers table */}
      <div className="rounded-xl bg-bg-s border border-line overflow-hidden">
        <div className="px-5 py-3 border-b border-line flex items-center justify-between">
          <h3 className="text-sm font-semibold text-heading">订阅列表（最近 {subscribers.length} 条）</h3>
          <CopyEmailsButton emails={subscribers.filter(s => !s.unsubscribed).map(s => s.email)} />
        </div>
        {subscribers.length === 0 ? (
          <p className="text-center py-12 text-sm text-muted">还没有订阅者，等发小红书/即刻后会有人来 👀</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-bg-t text-muted text-xs">
                <tr>
                  <th className="text-left px-4 py-2 font-medium">邮箱</th>
                  <th className="text-left px-4 py-2 font-medium">来源</th>
                  <th className="text-left px-4 py-2 font-medium">地区</th>
                  <th className="text-left px-4 py-2 font-medium">状态</th>
                  <th className="text-left px-4 py-2 font-medium">时间</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map(s => (
                  <tr key={s.id} className="border-t border-line-light hover:bg-bg transition-colors">
                    <td className="px-4 py-2 font-mono text-heading">{s.email}</td>
                    <td className="px-4 py-2 text-body">{s.source || '—'}</td>
                    <td className="px-4 py-2 text-body">
                      {s.country
                        ? `${countryFlag(s.country)}${s.city ? ' ' + s.city : ''}`
                        : '—'}
                    </td>
                    <td className="px-4 py-2">
                      {s.unsubscribed ? (
                        <span className="px-2 py-0.5 rounded text-xs bg-red-500/10 text-red-500">已退订</span>
                      ) : s.confirmed ? (
                        <span className="px-2 py-0.5 rounded text-xs bg-emerald/10 text-emerald">已确认</span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-xs bg-primary/10 text-primary">活跃</span>
                      )}
                    </td>
                    <td className="px-4 py-2 text-muted text-xs">{formatTime(s.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ label, value, icon, accent }: { label: string; value: number; icon: React.ReactNode; accent?: boolean }) {
  return (
    <div className={`rounded-xl p-5 border ${accent ? 'border-primary/30 bg-primary/5' : 'border-line bg-bg-s'}`}>
      <div className="flex items-center gap-2 text-muted text-xs mb-2">
        {icon}
        {label}
      </div>
      <div className="text-2xl font-bold text-heading font-mono">{value}</div>
    </div>
  )
}

function CopyEmailsButton({ emails }: { emails: string[] }) {
  const [copied, setCopied] = useState(false)
  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(emails.join(', '))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }
  if (emails.length === 0) return null
  return (
    <button
      onClick={doCopy}
      className="px-3 py-1 rounded-md text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer border-none"
    >
      {copied ? '✓ 已复制' : `复制 ${emails.length} 个邮箱`}
    </button>
  )
}
