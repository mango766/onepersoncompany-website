import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '新站24小时被Google/Bing/百度全收录：独立开发者SEO实战',
  description:
    '亲测有效的SEO实战流程：一人公司新站从"搜不到你"到 Google 已收录、Bing 已验证、百度已推送，全程24小时。Next.js + Vercel 实操教程，含 IndexNow/robots.ts/sitemap.ts/JSON-LD 全套代码，直接复制可用。',
  keywords: [
    'SEO 教程', '新站 SEO', '独立开发者 SEO', 'Next.js SEO',
    'Google Search Console', '百度资源平台', 'Bing Webmaster',
    'IndexNow', 'sitemap', 'robots.txt', '一人公司获客',
    'indie hacker SEO', 'solopreneur SEO',
  ],
  alternates: { canonical: '/tutorials/seo-from-zero-to-indexed' },
  openGraph: {
    title: '新站24小时被Google/Bing/百度全收录：我用这套流程让网站开始赚钱',
    description: '一人公司 SEO 实战教程 — 从0到被全平台收录的完整代码和命令',
    url: 'https://onepersoncompany.one/tutorials/seo-from-zero-to-indexed',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '新站24小时被全网收录 — 独立开发者 SEO 实战',
    description: '从0到Google/Bing/百度全收录的完整流程，直接抄',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
