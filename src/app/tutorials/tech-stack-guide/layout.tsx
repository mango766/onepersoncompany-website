import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '独立开发者技术栈指南 — Next.js + Supabase vs PHP + SQLite',
  description: 'Next.js + Supabase + Vercel 还是 PHP + SQLite？对比两套被验证的技术方案，选对你的一人公司技术栈。',
  robots: { index: false, follow: false },
  keywords: ['技术栈', 'Next.js', 'Supabase', 'Vercel', 'PHP', 'SQLite', '独立开发者技术栈'],
  alternates: { canonical: '/tutorials/tech-stack-guide' },
  openGraph: {
    title: '独立开发者技术栈指南',
    description: 'Next.js + Supabase vs PHP + SQLite — 两套被验证的方案',
    url: 'https://onepersoncompany.one/tutorials/tech-stack-guide',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
