import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '独立SaaS实战手册 — Pieter Levels / Marc Lou 成功方法论',
  description: '向 Pieter Levels（$3M/年）、Marc Lou（ShipFast $21K MRR）、Tony Dinh 学习 — 一套被验证过的独立 SaaS 成功框架。',
  robots: { index: false, follow: false },
  keywords: ['SaaS 教程', 'Pieter Levels', 'Marc Lou', 'ShipFast', '独立 SaaS', 'indie hacker'],
  alternates: { canonical: '/tutorials/solo-saas-playbook' },
  openGraph: {
    title: '独立SaaS实战手册 — 向年入千万美元的独立开发者学习',
    description: 'Pieter Levels / Marc Lou / Tony Dinh 的成功框架',
    url: 'https://onepersoncompany.one/tutorials/solo-saas-playbook',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
