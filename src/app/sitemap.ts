import type { MetadataRoute } from 'next'

const SITE_URL = 'https://onepersoncompany.one'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const tutorialSlugs = [
    'seo-from-zero-to-indexed',
    'launch-your-website-from-zero',
    // 以下教程暂未完成，隐藏中：
    // 'ai-tools-automation',
    // 'building-in-public',
    // 'side-project-to-fulltime',
    // 'solo-saas-playbook',
    // 'tech-stack-guide',
  ]

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/nav`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/tutorials`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...tutorialSlugs.map(slug => ({
      url: `${SITE_URL}/tutorials/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
