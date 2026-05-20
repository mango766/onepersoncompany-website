import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI驱动的一人公司：用AI工具替代10人团队',
  description: '从代码开发、UI设计、文案到客户支持 — 用 Cursor、Claude、v0 等 AI 工具自动化每一个环节，一个人真的可以做成一家公司。',
  robots: { index: false, follow: false },
  keywords: ['AI 自动化', 'Cursor', 'Claude', 'v0', '一人公司', '独立开发者', 'AI 工具替代团队'],
  alternates: { canonical: '/tutorials/ai-tools-automation' },
  openGraph: {
    title: 'AI驱动的一人公司：用AI工具替代10人团队',
    description: '从代码到设计到客服 — 用 AI 工具自动化每一个环节',
    url: 'https://onepersoncompany.one/tutorials/ai-tools-automation',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
