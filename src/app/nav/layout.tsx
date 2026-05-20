import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI工具导航 — 一人公司必备的30个实战工具',
  description:
    '精选30个经过实战验证的AI工具：AI对话(ChatGPT/Claude/Kimi/DeepSeek)、AI编程(Cursor/v0)、工作流(扣子/Dify/n8n)、设计图像视频(Midjourney/可灵)、开发部署(Vercel/Supabase)、支付变现(Stripe)等。每个都直击痛点。',
  keywords: [
    'AI工具导航', 'AI工具推荐', 'AI工具合集', '独立开发者工具',
    'Cursor', 'Claude', 'ChatGPT', 'Kimi', 'DeepSeek',
    '扣子', 'Coze', 'Dify', 'n8n', 'Midjourney', '可灵AI', '即梦AI',
    'Vercel', 'Supabase', 'Stripe',
    'AI tools directory', 'solopreneur tools', 'indie hacker stack',
  ],
  alternates: { canonical: '/nav' },
  openGraph: {
    title: 'AI工具导航 — 一人公司必备的30个实战工具',
    description: '精选30个经过实战验证的AI工具，按功能分类，每个都直击痛点',
    url: 'https://onepersoncompany.one/nav',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI工具导航 — 30个实战精选',
    description: '一人公司必备的AI工具，按功能分类，直击痛点',
  },
}

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return children
}
