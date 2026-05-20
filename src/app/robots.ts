import type { MetadataRoute } from 'next'

const SITE_URL = 'https://onepersoncompany.one'

export default function robots(): MetadataRoute.Robots {
  // 草稿教程（未完成，不允许被搜索引擎爬）
  const hiddenTutorials = [
    '/tutorials/ai-tools-automation',
    '/tutorials/building-in-public',
    '/tutorials/side-project-to-fulltime',
    '/tutorials/solo-saas-playbook',
    '/tutorials/tech-stack-guide',
  ]
  const commonDisallow = ['/admin', '/api/', ...hiddenTutorials]

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: commonDisallow,
      },
      // 主要搜索引擎明确允许
      { userAgent: 'Googlebot', allow: '/', disallow: commonDisallow },
      { userAgent: 'Bingbot', allow: '/', disallow: commonDisallow },
      { userAgent: 'Baiduspider', allow: '/', disallow: commonDisallow },
      // AI 爬虫（根据 SEO 趋势，被 AI 引用 = 新的流量来源）
      { userAgent: 'GPTBot', allow: '/', disallow: hiddenTutorials },
      { userAgent: 'ClaudeBot', allow: '/', disallow: hiddenTutorials },
      { userAgent: 'PerplexityBot', allow: '/', disallow: hiddenTutorials },
      { userAgent: 'Google-Extended', allow: '/', disallow: hiddenTutorials },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
