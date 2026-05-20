import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { PageTracker } from '@/components/PageTracker'
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/JsonLd'

const SITE_URL = 'https://onepersoncompany.one'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'One Person Company — AI工具导航 & 独立开发者资源',
    template: '%s | One Person Company',
  },
  description:
    '一人公司必备的AI工具导航、教程和资源。精选实战验证的AI对话、编程、工作流、设计工具，帮独立开发者用AI做十人团队的事。Battle-tested AI tools for solopreneurs.',
  keywords: [
    '一人公司', '独立开发者', 'AI工具导航', 'solopreneur',
    'AI tools', 'indie hacker', 'SaaS', 'AI 编程',
    'Cursor', 'Claude', 'ChatGPT', '扣子', 'Dify',
    '独立创业', 'AI 创业', 'indie maker',
  ],
  authors: [{ name: 'One Person Company' }],
  creator: 'One Person Company',
  publisher: 'One Person Company',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
    url: SITE_URL,
    siteName: 'One Person Company',
    title: 'One Person Company — AI工具导航 & 独立开发者资源',
    description:
      '一人公司必备的AI工具、教程和资源。精选实战验证的AI对话、编程、工作流工具，帮独立开发者用AI做十人团队的事。',
    images: [
      {
        url: '/favicon.svg',
        width: 512,
        height: 512,
        alt: 'One Person Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Person Company — AI工具导航',
    description: '一人公司必备的AI工具、教程和资源',
    images: ['/favicon.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    // Google 自动通过 Vercel 关联验证，无需手动码
    other: {
      // 同时验证 www 子域 (codeva-y3HG4PP9D8) 和裸域 (codeva-EmpkBDp3nV)
      'baidu-site-verification': ['codeva-y3HG4PP9D8', 'codeva-EmpkBDp3nV'],
      // Bing Webmaster
      'msvalidate.01': 'D399E6E3F88C63D989405B4559B3267B',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <ThemeProvider>
          <I18nProvider>
            {children}
            <PageTracker />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
