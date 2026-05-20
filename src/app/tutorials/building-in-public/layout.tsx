import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '公开构建 + 内容营销完整指南 — 零成本获客方法论',
  description: 'Marc Lou 如何零广告预算涨到 13.5 万粉丝、2 万邮件订阅 — 你也能复制的完整玩法。',
  robots: { index: false, follow: false },
  keywords: ['公开构建', 'building in public', '内容营销', 'Marc Lou', '独立开发者营销', 'Twitter 增长'],
  alternates: { canonical: '/tutorials/building-in-public' },
  openGraph: {
    title: '公开构建 + 内容营销完整指南',
    description: 'Marc Lou 零广告涨到 13.5 万粉的方法论',
    url: 'https://onepersoncompany.one/tutorials/building-in-public',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
