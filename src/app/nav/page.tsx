'use client'

import { ArrowLeft, ExternalLink, Sparkles, Code2, Palette, Megaphone, Briefcase, Bot, Database, Globe, CreditCard, BarChart3, Mail, Wrench, Cpu, Layers } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import Link from 'next/link'

interface NavItem {
  name: string
  desc: string
  descZh: string
  url: string
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
    titleEn: 'AI Coding',
    titleZh: 'AI 编程',
    icon: <Code2 size={20} />,
    iconClass: 'text-primary bg-primary/10',
    items: [
      { name: 'Cursor', desc: 'AI-powered code editor', descZh: 'AI代码编辑器', url: 'https://cursor.com', hot: true },
      { name: 'Claude Code', desc: 'CLI coding agent by Anthropic', descZh: 'Anthropic命令行编码Agent', url: 'https://claude.ai', hot: true },
      { name: 'GitHub Copilot', desc: 'AI pair programmer', descZh: 'AI结对编程', url: 'https://github.com/features/copilot' },
      { name: 'v0', desc: 'AI UI component generator', descZh: 'AI UI组件生成器', url: 'https://v0.dev', hot: true },
      { name: 'Bolt.new', desc: 'Full-stack app in browser', descZh: '浏览器内全栈开发', url: 'https://bolt.new' },
      { name: 'Replit', desc: 'AI-powered cloud IDE', descZh: 'AI云端IDE', url: 'https://replit.com' },
    ],
  },
  {
    titleEn: 'AI Models & API',
    titleZh: 'AI 模型 & API',
    icon: <Cpu size={20} />,
    iconClass: 'text-violet bg-violet/10',
    items: [
      { name: 'OpenAI API', desc: 'GPT-4o, DALL-E, Whisper', descZh: 'GPT-4o, DALL-E, Whisper', url: 'https://platform.openai.com', hot: true },
      { name: 'Anthropic API', desc: 'Claude models API', descZh: 'Claude模型API', url: 'https://console.anthropic.com' },
      { name: 'Google AI Studio', desc: 'Gemini models', descZh: 'Gemini模型', url: 'https://aistudio.google.com' },
      { name: 'Hugging Face', desc: 'Open-source AI models hub', descZh: '开源AI模型中心', url: 'https://huggingface.co', hot: true },
      { name: 'Replicate', desc: 'Run ML models via API', descZh: 'API运行ML模型', url: 'https://replicate.com' },
      { name: 'Together AI', desc: 'Fast open-source model inference', descZh: '快速开源模型推理', url: 'https://together.ai' },
      { name: 'Groq', desc: 'Ultra-fast LLM inference', descZh: '超快LLM推理', url: 'https://groq.com' },
      { name: 'DeepSeek', desc: 'Efficient reasoning models', descZh: '高效推理模型', url: 'https://deepseek.com' },
    ],
  },
  {
    titleEn: 'AI Design & Creative',
    titleZh: 'AI 设计 & 创意',
    icon: <Palette size={20} />,
    iconClass: 'text-accent bg-accent/10',
    items: [
      { name: 'Midjourney', desc: 'AI image generation', descZh: 'AI图像生成', url: 'https://midjourney.com', hot: true },
      { name: 'Figma', desc: 'Collaborative UI design', descZh: '协作式UI设计', url: 'https://figma.com' },
      { name: 'Canva', desc: 'Quick graphics & design', descZh: '快速图形设计', url: 'https://canva.com' },
      { name: 'Framer', desc: 'AI website builder', descZh: 'AI网站构建器', url: 'https://framer.com' },
      { name: 'Gamma', desc: 'AI presentation maker', descZh: 'AI演示文稿', url: 'https://gamma.app' },
      { name: 'Runway', desc: 'AI video generation', descZh: 'AI视频生成', url: 'https://runwayml.com' },
    ],
  },
  {
    titleEn: 'Full-Stack & Backend',
    titleZh: '全栈 & 后端',
    icon: <Database size={20} />,
    iconClass: 'text-emerald bg-emerald/10',
    items: [
      { name: 'Supabase', desc: 'Open-source Firebase alternative', descZh: '开源Firebase替代', url: 'https://supabase.com', hot: true },
      { name: 'Vercel', desc: 'Deploy & host frontend', descZh: '前端部署托管', url: 'https://vercel.com', hot: true },
      { name: 'Cloudflare', desc: 'CDN, DNS, Workers', descZh: 'CDN, DNS, Workers', url: 'https://cloudflare.com' },
      { name: 'Railway', desc: 'Deploy backend services', descZh: '后端服务部署', url: 'https://railway.app' },
      { name: 'Upstash', desc: 'Serverless Redis & Kafka', descZh: 'Serverless Redis', url: 'https://upstash.com' },
      { name: 'Neon', desc: 'Serverless PostgreSQL', descZh: 'Serverless PostgreSQL', url: 'https://neon.tech' },
      { name: 'PlanetScale', desc: 'Serverless MySQL', descZh: 'Serverless MySQL', url: 'https://planetscale.com' },
    ],
  },
  {
    titleEn: 'Payment & Revenue',
    titleZh: '支付 & 收入',
    icon: <CreditCard size={20} />,
    iconClass: 'text-green-500 bg-green-500/10',
    items: [
      { name: 'Stripe', desc: 'Global payment processing', descZh: '全球支付处理', url: 'https://stripe.com', hot: true },
      { name: 'Lemon Squeezy', desc: 'All-in-one digital sales', descZh: '一站式数字商品销售', url: 'https://lemonsqueezy.com' },
      { name: 'Gumroad', desc: 'Sell digital products', descZh: '销售数字产品', url: 'https://gumroad.com' },
      { name: 'Paddle', desc: 'B2B SaaS billing', descZh: 'B2B SaaS计费', url: 'https://paddle.com' },
      { name: 'Buy Me a Coffee', desc: 'Creator monetization', descZh: '创作者打赏', url: 'https://buymeacoffee.com' },
    ],
  },
  {
    titleEn: 'Analytics & SEO',
    titleZh: '分析 & SEO',
    icon: <BarChart3 size={20} />,
    iconClass: 'text-blue-500 bg-blue-500/10',
    items: [
      { name: 'PostHog', desc: 'Product analytics & experiments', descZh: '产品分析与实验', url: 'https://posthog.com', hot: true },
      { name: 'Plausible', desc: 'Privacy-friendly analytics', descZh: '隐私友好分析', url: 'https://plausible.io' },
      { name: 'Ahrefs', desc: 'SEO research & backlinks', descZh: 'SEO研究与外链', url: 'https://ahrefs.com' },
      { name: 'Google Search Console', desc: 'Free SEO insights', descZh: '免费SEO洞察', url: 'https://search.google.com/search-console' },
      { name: 'Hotjar', desc: 'Heatmaps & recordings', descZh: '热力图和录屏', url: 'https://hotjar.com' },
    ],
  },
  {
    titleEn: 'Email & Marketing',
    titleZh: '邮件 & 营销',
    icon: <Mail size={20} />,
    iconClass: 'text-pink-500 bg-pink-500/10',
    items: [
      { name: 'Resend', desc: 'Developer-first email API', descZh: '开发者优先邮件API', url: 'https://resend.com', hot: true },
      { name: 'Beehiiv', desc: 'Newsletter platform', descZh: 'Newsletter平台', url: 'https://beehiiv.com' },
      { name: 'Typefully', desc: 'Twitter/X growth tool', descZh: 'Twitter/X增长工具', url: 'https://typefully.com' },
      { name: 'Buffer', desc: 'Social media scheduling', descZh: '社交媒体排程', url: 'https://buffer.com' },
      { name: 'ConvertKit', desc: 'Creator email marketing', descZh: '创作者邮件营销', url: 'https://convertkit.com' },
    ],
  },
  {
    titleEn: 'AI Agents & Automation',
    titleZh: 'AI Agent & 自动化',
    icon: <Bot size={20} />,
    iconClass: 'text-orange-500 bg-orange-500/10',
    items: [
      { name: 'LangChain', desc: 'LLM application framework', descZh: 'LLM应用框架', url: 'https://langchain.com' },
      { name: 'CrewAI', desc: 'Multi-agent orchestration', descZh: '多Agent编排', url: 'https://crewai.com' },
      { name: 'n8n', desc: 'Workflow automation', descZh: '工作流自动化', url: 'https://n8n.io', hot: true },
      { name: 'Make (Integromat)', desc: 'Visual automation', descZh: '可视化自动化', url: 'https://make.com' },
      { name: 'Zapier', desc: 'Connect 6000+ apps', descZh: '连接6000+应用', url: 'https://zapier.com' },
      { name: 'Dify', desc: 'Open-source LLM app builder', descZh: '开源LLM应用构建', url: 'https://dify.ai' },
    ],
  },
  {
    titleEn: 'SaaS Boilerplates',
    titleZh: 'SaaS 模板',
    icon: <Layers size={20} />,
    iconClass: 'text-cyan-500 bg-cyan-500/10',
    items: [
      { name: 'ShipFast', desc: 'Next.js SaaS boilerplate by Marc Lou', descZh: 'Marc Lou的Next.js SaaS模板', url: 'https://shipfa.st', hot: true },
      { name: 'Shipixen', desc: 'AI-generated landing pages', descZh: 'AI生成落地页', url: 'https://shipixen.com' },
      { name: 'SaaSfly', desc: 'Open-source Next.js starter', descZh: '开源Next.js启动模板', url: 'https://saasfly.io' },
      { name: 'shadcn/ui', desc: 'Beautiful UI components', descZh: '精美UI组件库', url: 'https://ui.shadcn.com', hot: true },
      { name: 'Tailwind UI', desc: 'Premium Tailwind components', descZh: '高级Tailwind组件', url: 'https://tailwindui.com' },
    ],
  },
  {
    titleEn: 'Community & Learning',
    titleZh: '社区 & 学习',
    icon: <Globe size={20} />,
    iconClass: 'text-teal-500 bg-teal-500/10',
    items: [
      { name: 'Indie Hackers', desc: 'Solopreneur community', descZh: '独立创业者社区', url: 'https://indiehackers.com', hot: true },
      { name: 'Product Hunt', desc: 'Launch your product', descZh: '发布你的产品', url: 'https://producthunt.com' },
      { name: 'Hacker News', desc: 'Tech news & discussion', descZh: '科技新闻与讨论', url: 'https://news.ycombinator.com' },
      { name: 'SkillHub', desc: 'AI skills marketplace', descZh: 'AI技能市场', url: 'https://skillhub.com' },
      { name: 'Buildspace', desc: 'Builder community', descZh: '构建者社区', url: 'https://buildspace.so' },
    ],
  },
  {
    titleEn: 'Productivity & Business',
    titleZh: '效率 & 商业',
    icon: <Wrench size={20} />,
    iconClass: 'text-gray-500 bg-gray-500/10',
    items: [
      { name: 'Notion', desc: 'All-in-one workspace', descZh: '全能工作空间', url: 'https://notion.so' },
      { name: 'Linear', desc: 'Project management for devs', descZh: '开发者项目管理', url: 'https://linear.app' },
      { name: 'Cal.com', desc: 'Open-source scheduling', descZh: '开源日程调度', url: 'https://cal.com' },
      { name: 'Stripe Atlas', desc: 'Incorporate your company', descZh: '一站式注册公司', url: 'https://stripe.com/atlas' },
      { name: 'Mercury', desc: 'Startup banking', descZh: '创业者银行', url: 'https://mercury.com' },
      { name: 'Crisp', desc: 'Customer support chat', descZh: '客户支持聊天', url: 'https://crisp.chat' },
    ],
  },
]

export default function NavPage() {
  const { lang } = useI18n()

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
              {lang === 'zh' ? '精品导航' : 'Curated Directory'}
            </h1>
          </div>
          <p className="text-lg text-body max-w-2xl">
            {lang === 'zh'
              ? '一人公司必备的AI工具、API、开发资源和创业服务。每一个都是精挑细选，帮你用最少的成本做最大的事。'
              : 'Essential AI tools, APIs, dev resources and startup services for solopreneurs. Hand-picked to help you do more with less.'}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {cat.items.map((item, j) => (
                <a
                  key={j}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-start gap-3 p-4 rounded-xl no-underline
                    bg-bg-s border border-line-light hover:border-line hover:scale-[1.02] transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-heading truncate">{item.name}</span>
                      {item.hot && (
                        <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-500">HOT</span>
                      )}
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
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

      {/* Footer note */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center py-8 border-t border-line">
          <p className="text-sm text-muted">
            {lang === 'zh'
              ? '持续更新中 · 发现好工具？欢迎推荐'
              : 'Continuously updated · Found a great tool? Let us know'}
          </p>
        </div>
      </div>
    </div>
  )
}
