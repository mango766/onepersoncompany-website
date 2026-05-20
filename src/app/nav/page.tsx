'use client'

import { ArrowLeft, ExternalLink, Sparkles, Code2, Palette, Megaphone, Bot, Database, Globe, CreditCard, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '@/components/providers/I18nProvider'
import Link from 'next/link'

interface NavItem {
  name: string
  desc: string
  descZh: string
  url: string
  domain: string
  hot?: boolean
}

interface NavCategory {
  titleEn: string
  titleZh: string
  icon: React.ReactNode
  iconClass: string
  items: NavItem[]
}

const categories: NavCategory[] = [
  {
    titleEn: 'AI Chat & Assistants',
    titleZh: 'AI 对话助手',
    icon: <Sparkles size={20} />,
    iconClass: 'text-primary bg-primary/10',
    items: [
      { name: 'ChatGPT', desc: 'The most versatile AI assistant — writing, analysis, coding', descZh: '综合能力最强，写作/分析/编程一站式搞定', url: 'https://chat.openai.com', domain: 'openai.com', hot: true },
      { name: 'Claude', desc: 'Best for long-context reading and serious coding', descZh: '长文本和代码能力天花板，程序员首选', url: 'https://claude.ai', domain: 'claude.ai', hot: true },
      { name: 'Kimi', desc: '2M token context, free — kills PDFs and contracts', descZh: '国产200万字长文本王者，读论文合同神器，免费', url: 'https://kimi.moonshot.cn', domain: 'moonshot.cn' },
      { name: 'DeepSeek', desc: 'o1-level reasoning at 10x cheaper API price', descZh: '推理能力对标o1，API价格便宜10倍', url: 'https://chat.deepseek.com', domain: 'deepseek.com', hot: true },
    ],
  },
  {
    titleEn: 'AI Coding',
    titleZh: 'AI 编程',
    icon: <Code2 size={20} />,
    iconClass: 'text-violet bg-violet/10',
    items: [
      { name: 'Cursor', desc: 'AI-first editor — $20/mo pays for itself in an hour', descZh: '一次性写完一个功能，$20月费一小时回本', url: 'https://cursor.com', domain: 'cursor.com', hot: true },
      { name: 'Claude Code', desc: 'Terminal coding agent — reads, edits, tests on its own', descZh: '终端里的编码Agent，自己读代码自己改自己跑测试', url: 'https://claude.com/claude-code', domain: 'anthropic.com', hot: true },
      { name: 'v0', desc: 'Chat → shippable React components', descZh: '一句话出可用React组件，UI再也不用从零写', url: 'https://v0.dev', domain: 'v0.dev' },
      { name: 'Bolt.new', desc: 'Full-stack apps generated and deployed in browser', descZh: '浏览器内生成并部署全栈应用，做demo最快', url: 'https://bolt.new', domain: 'bolt.new' },
    ],
  },
  {
    titleEn: 'AI Workflow & Agents',
    titleZh: 'AI 工作流 & Agent',
    icon: <Bot size={20} />,
    iconClass: 'text-orange-500 bg-orange-500/10',
    items: [
      { name: '扣子 Coze', desc: 'ByteDance no-code bot builder — richest CN ecosystem', descZh: '字节出品，拖拽搭Bot，接飞书/公众号/抖音，国内生态最全', url: 'https://www.coze.cn', domain: 'coze.cn', hot: true },
      { name: 'Dify', desc: 'Self-hostable LLM app platform for enterprises', descZh: '开源自部署，企业内AI应用首选，可视化编排RAG', url: 'https://dify.ai', domain: 'dify.ai', hot: true },
      { name: 'n8n', desc: 'Open-source Zapier — 600+ integrations, self-controlled', descZh: '开源版Zapier，600+集成，自建自控不受制于人', url: 'https://n8n.io', domain: 'n8n.io' },
      { name: 'Make', desc: 'Visual automation — 10x more power than Zapier', descZh: '可视化自动化天花板，复杂流程比Zapier强10倍', url: 'https://make.com', domain: 'make.com' },
    ],
  },
  {
    titleEn: 'AI Writing & Content',
    titleZh: 'AI 写作 & 内容',
    icon: <Megaphone size={20} />,
    iconClass: 'text-pink-500 bg-pink-500/10',
    items: [
      { name: '秘塔AI搜索', desc: 'Chinese AI search with citations — no hallucinations', descZh: '中文搜索+写作最优解，结果带参考来源，写稿不翻车', url: 'https://metaso.cn', domain: 'metaso.cn', hot: true },
      { name: 'Notion AI', desc: 'AI inside your docs — saves an hour every day', descZh: '文档里直接改写总结，工作流无缝，每天省1小时', url: 'https://notion.so', domain: 'notion.so' },
      { name: 'Gamma', desc: 'Ship usable presentations from one prompt', descZh: '一句话生成可用PPT，甩开传统模板10条街', url: 'https://gamma.app', domain: 'gamma.app' },
    ],
  },
  {
    titleEn: 'AI Image & Video',
    titleZh: 'AI 图像 & 视频',
    icon: <Palette size={20} />,
    iconClass: 'text-accent bg-accent/10',
    items: [
      { name: 'Midjourney', desc: 'Commercial-grade image generation — top aesthetics', descZh: '商用出图天花板，审美在线，做营销素材首选', url: 'https://midjourney.com', domain: 'midjourney.com', hot: true },
      { name: '即梦 AI', desc: 'ByteDance image + video, CN-friendly, free tier', descZh: '字节文生图+文生视频，中文提示词友好，免费额度够用', url: 'https://jimeng.jianying.com', domain: 'jianying.com' },
      { name: '可灵 AI', desc: 'Best Chinese text-to-video — close to Sora quality', descZh: '快手出品，国内文生视频目前最能打，动态接近Sora', url: 'https://klingai.com', domain: 'klingai.com', hot: true },
      { name: 'Runway', desc: 'Video editing + AI generation in one suite', descZh: '视频编辑+AI生成一体化，海外做短片的标准', url: 'https://runwayml.com', domain: 'runwayml.com' },
    ],
  },
  {
    titleEn: 'Dev & Deploy',
    titleZh: '开发 & 部署',
    icon: <Database size={20} />,
    iconClass: 'text-emerald bg-emerald/10',
    items: [
      { name: 'Vercel', desc: 'Git push = live site. Zero-config frontend hosting', descZh: 'Push代码自动上线，前端部署零心智负担，免费额度够用', url: 'https://vercel.com', domain: 'vercel.com', hot: true },
      { name: 'Supabase', desc: 'Open-source Firebase — DB + Auth + Storage', descZh: '开源Firebase替代，数据库+Auth+存储一站式，SQL可控', url: 'https://supabase.com', domain: 'supabase.com', hot: true },
      { name: 'Cloudflare', desc: 'Free CDN, DNS, Workers — saves you a server', descZh: 'CDN/DNS/Workers全免费，全球加速+防护，省一台服务器钱', url: 'https://cloudflare.com', domain: 'cloudflare.com' },
      { name: 'Resend', desc: 'Developer-first email — send mail in 3 lines', descZh: '开发者邮件服务，API 3行代码发邮件，告别SendGrid的坑', url: 'https://resend.com', domain: 'resend.com' },
    ],
  },
  {
    titleEn: 'Payment & Revenue',
    titleZh: '支付 & 变现',
    icon: <CreditCard size={20} />,
    iconClass: 'text-green-500 bg-green-500/10',
    items: [
      { name: 'Stripe', desc: 'Only real answer for global SaaS payments', descZh: '海外收款唯一解，独立开发者做SaaS必备', url: 'https://stripe.com', domain: 'stripe.com', hot: true },
      { name: 'Creem', desc: 'Stripe alternative that is friendly to CN devs', descZh: 'Stripe替代方案，对中国开发者友好，不用美国公司也能收款', url: 'https://creem.io', domain: 'creem.io' },
      { name: 'Lemon Squeezy', desc: 'Merchant of Record — handles global tax for you', descZh: 'MoR模式帮你搞定全球税务，卖数字产品省心', url: 'https://lemonsqueezy.com', domain: 'lemonsqueezy.com' },
    ],
  },
  {
    titleEn: 'Launch & Community',
    titleZh: '获客 & 社区',
    icon: <Globe size={20} />,
    iconClass: 'text-teal-500 bg-teal-500/10',
    items: [
      { name: 'Product Hunt', desc: 'One Launch = a month of SEO. Must-do globally', descZh: '海外冷启动必经之地，一次Launch顶一个月SEO', url: 'https://producthunt.com', domain: 'producthunt.com', hot: true },
      { name: 'Indie Hackers', desc: 'Solopreneur community — revenue-sharing, not alone', descZh: '独立开发者社区，分享收入和经验，路上不孤单', url: 'https://indiehackers.com', domain: 'indiehackers.com' },
      { name: '即刻', desc: 'Chinese indie maker hub — find seed users here', descZh: '国内独立开发者聚集地，产品冷启动+找种子用户', url: 'https://okjike.com', domain: 'okjike.com' },
    ],
  },
]

export default function NavPage() {
  const { lang } = useI18n()
  const [copied, setCopied] = useState(false)

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText('LIR--3point14')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="pt-28 pb-16 px-6 bg-bg-s border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted hover:text-heading transition-colors no-underline mb-6">
            <ArrowLeft size={14} />
            {lang === 'zh' ? '返回首页' : 'Back to Home'}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={28} className="text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-heading">
              {lang === 'zh' ? 'AI工具导航' : 'AI Tools Directory'}
            </h1>
          </div>
          <p className="text-lg text-body max-w-2xl">
            {lang === 'zh'
              ? '一人公司实战验证的AI工具精选。每个都经过实际使用，直击具体痛点——不是大杂烩，是确实能帮你做事的。'
              : 'Battle-tested AI tools for solopreneurs. Every pick used in anger — no fluff, just the ones that actually ship results.'}
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 z-10 bg-bg/85 backdrop-blur-xl border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat, i) => (
              <a
                key={i}
                href={`#cat-${i}`}
                className="px-3 py-1.5 rounded-lg text-xs font-medium no-underline text-body hover:text-heading hover:bg-bg-t transition-colors whitespace-nowrap"
              >
                {lang === 'zh' ? cat.titleZh : cat.titleEn}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {categories.map((cat, i) => (
          <section key={i} id={`cat-${i}`} className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.iconClass}`}>
                {cat.icon}
              </div>
              <h2 className="text-xl font-bold text-heading">
                {lang === 'zh' ? cat.titleZh : cat.titleEn}
              </h2>
              <span className="text-xs text-muted bg-bg-t px-2 py-1 rounded-full">{cat.items.length}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item, j) => (
                <a
                  key={j}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-start gap-3 p-4 rounded-xl no-underline
                    bg-bg-s border border-line-light hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`}
                    alt=""
                    className="w-10 h-10 rounded-lg shrink-0 bg-bg-t p-1.5"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-heading truncate">{item.name}</span>
                      {item.hot && (
                        <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-500">HOT</span>
                      )}
                    </div>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
                      {lang === 'zh' ? item.descZh : item.desc}
                    </p>
                  </div>
                  <ExternalLink size={14} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-muted" />
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="rounded-2xl border border-line-light bg-gradient-to-br from-primary/5 via-violet/5 to-accent/5 p-8 text-center">
          <h3 className="text-2xl font-bold text-heading mb-2">
            {lang === 'zh' ? '想聊聊一人公司？' : 'Want to chat about solopreneur life?'}
          </h3>
          <p className="text-sm text-body mb-6 max-w-xl mx-auto">
            {lang === 'zh'
              ? '有新工具推荐、合作想法，或者单纯想交流独立开发 —— 加我微信，直接聊'
              : 'Tool recommendations, collab ideas, or just want to talk indie dev — hit me up on WeChat'}
          </p>
          <button
            onClick={copyWechat}
            className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-bg-s border border-line hover:border-primary hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span className="text-xs text-muted uppercase tracking-wider">
              {lang === 'zh' ? '微信' : 'WeChat'}
            </span>
            <span className="text-base font-mono font-semibold text-heading">LIR--3point14</span>
            {copied ? (
              <Check size={18} className="text-emerald" />
            ) : (
              <Copy size={16} className="text-muted group-hover:text-primary transition-colors" />
            )}
          </button>
          {copied && (
            <p className="text-xs text-emerald mt-3">
              {lang === 'zh' ? '已复制到剪贴板，打开微信搜索添加 ✓' : 'Copied! Search this ID on WeChat ✓'}
            </p>
          )}
        </div>
      </div>

      {/* Footer note */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center py-8 border-t border-line">
          <p className="text-sm text-muted">
            {lang === 'zh'
              ? '精选 · 持续更新 · 发现更好的工具？欢迎推荐'
              : 'Curated · Continuously updated · Found a better tool? Let us know'}
          </p>
        </div>
      </div>
    </div>
  )
}
