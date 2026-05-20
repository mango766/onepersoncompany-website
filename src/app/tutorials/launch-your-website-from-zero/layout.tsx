import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '0到1上线你的个人/公司网站（国内友好）— 全年 ¥85 实战教程',
  description:
    '不靠建站公司、不写服务器代码、全年成本≈¥85。NameSilo + Cloudflare + GitHub + Vercel 的国内友好建站方案，含支付宝付款、中国大陆访问优化、备案替代方案，全程命令和截图指引，一人公司官网起步首选。',
  keywords: [
    '建站教程', '个人网站', '公司官网', '独立开发者建站', '一人公司建站',
    'NameSilo', 'Cloudflare', 'Vercel', 'GitHub Pages', 'Serverless 建站',
    '国内 Vercel', '支付宝买域名', 'CNAME Flattening', 'Astro 建站', 'Next.js 官网',
    'ICP 备案替代', '免费建站', 'Cloudflare SSL',
  ],
  alternates: { canonical: '/tutorials/launch-your-website-from-zero' },
  openGraph: {
    title: '0到1上线你的个人/公司网站（国内友好）— 全年 ¥85 的现代建站方案',
    description: '抛弃建站公司的完整替代方案，NameSilo + Cloudflare + Vercel 一套干到上线，国内用户友好',
    url: 'https://onepersoncompany.one/tutorials/launch-your-website-from-zero',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '0到1上线个人/公司网站 — 国内友好版',
    description: '全年成本 ¥85，抛弃建站公司的现代方案',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
