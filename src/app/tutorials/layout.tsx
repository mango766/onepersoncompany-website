import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '独立开发者教程 — 从0到1打造一人公司',
  description:
    '面向独立创业者的完整教程：如何启动一人SaaS、AI自动化80%日常工作、公开构建打造影响力、从副业做到月入万刀。真实策略，实战可落地。',
  keywords: [
    '独立开发者教程', '一人公司教程', 'SaaS 教程',
    'AI 自动化', '独立创业', 'indie hacker tutorial',
    'solopreneur guide', 'building in public',
  ],
  alternates: { canonical: '/tutorials' },
  openGraph: {
    title: '独立开发者教程 — 从0到1打造一人公司',
    description: '面向独立创业者的完整教程：SaaS启动、AI自动化、公开构建、从副业到全职',
    url: 'https://onepersoncompany.one/tutorials',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '独立开发者教程',
    description: '从0到1打造一人公司的完整指南',
  },
}

export default function TutorialsLayout({ children }: { children: React.ReactNode }) {
  return children
}
