import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '从副业到全职独立开发者 — 安全过渡路线图',
  description: '在不辞职的前提下打造你的独立业务 — 什么时候该跳出来，跳出来前要准备什么，分阶段的过渡方法。',
  robots: { index: false, follow: false },
  keywords: ['副业', '全职独立开发者', '独立创业', '转型', 'side project', 'full-time solopreneur'],
  alternates: { canonical: '/tutorials/side-project-to-fulltime' },
  openGraph: {
    title: '从副业到全职独立开发者 — 安全过渡路线图',
    description: '何时该跳，如何准备，分阶段过渡',
    url: 'https://onepersoncompany.one/tutorials/side-project-to-fulltime',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
