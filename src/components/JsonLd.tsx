import Script from 'next/script'

const SITE_URL = 'https://onepersoncompany.one'

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'One Person Company',
    alternateName: '一人公司',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: '一人公司必备的AI工具导航、教程和资源。帮独立开发者用AI做十人团队的事。',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['zh-CN', 'en'],
    },
  }
  return (
    <Script id="jsonld-organization" type="application/ld+json" strategy="beforeInteractive">
      {JSON.stringify(data)}
    </Script>
  )
}

export function WebsiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'One Person Company',
    alternateName: '一人公司',
    url: SITE_URL,
    inLanguage: ['zh-CN', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/nav?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
  return (
    <Script id="jsonld-website" type="application/ld+json" strategy="beforeInteractive">
      {JSON.stringify(data)}
    </Script>
  )
}

interface ItemListProps {
  name: string
  description?: string
  items: { name: string; url: string; description?: string }[]
}

export function ItemListJsonLd({ name, description, items }: ItemListProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'WebApplication',
        name: item.name,
        url: item.url,
        ...(item.description ? { description: item.description } : {}),
      },
    })),
  }
  return (
    <Script id={`jsonld-itemlist-${name.replace(/\s+/g, '-').toLowerCase()}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  )
}

interface ArticleJsonLdProps {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
}

export function ArticleJsonLd({ title, description, url, datePublished, dateModified }: ArticleJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: datePublished || '2026-04-18',
    dateModified: dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'One Person Company',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'One Person Company',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
  }
  return (
    <Script id="jsonld-article" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  )
}
