'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Lang = 'en' | 'zh'

interface I18nContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.products': { en: 'Products', zh: '产品' },
  'nav.tutorials': { en: 'Tutorials', zh: '教程' },
  'nav.tools': { en: 'AI Tools', zh: 'AI工具导航' },
  'nav.about': { en: 'About', zh: '关于' },
  'nav.blog': { en: 'Blog', zh: '博客' },
  'nav.contact': { en: 'Contact', zh: '联系我' },

  // Hero
  'hero.badge': { en: 'Build. Launch. Scale. Alone.', zh: '构建 / 发布 / 扩展 / 独立完成' },
  'hero.title.1': { en: 'Everything You Need to', zh: '一人公司所需的' },
  'hero.title.2': { en: 'Build a One-Person Company', zh: '一切资源' },
  'hero.subtitle': {
    en: 'Tutorials, products, and tools curated for solopreneurs. Build your business with AI-powered efficiency — no team required.',
    zh: '为独立创业者精选的教程、产品和工具。借助 AI 驱动的高效工作流，一个人也能打造成功的公司。'
  },
  'hero.cta.primary': { en: 'Explore Resources', zh: '探索资源' },
  'hero.cta.secondary': { en: 'Read Tutorials', zh: '阅读教程' },

  // Stats
  'stats.tutorials': { en: 'Tutorials', zh: '教程' },
  'stats.tools': { en: 'Tools & Resources', zh: '工具与资源' },
  'stats.readers': { en: 'Monthly Readers', zh: '月度读者' },
  'stats.products': { en: 'Products', zh: '产品' },

  // Products
  'products.title': { en: 'Products', zh: '产品' },
  'products.subtitle': {
    en: 'Tools and products built for the solopreneur journey',
    zh: '为独立创业之旅打造的工具与产品'
  },
  'products.coming': { en: 'Coming Soon', zh: '即将推出' },

  'product.1.title': { en: 'Solopreneur Toolkit', zh: '一人公司工具包' },
  'product.1.desc': {
    en: 'A curated collection of templates, workflows, and automation tools to run your one-person company efficiently.',
    zh: '精选模板、工作流和自动化工具集合，高效运营你的一人公司。'
  },
  'product.2.title': { en: 'AI Business Builder', zh: 'AI 商业构建器' },
  'product.2.desc': {
    en: 'Leverage AI to automate repetitive tasks, generate content, and scale your business without hiring.',
    zh: '利用 AI 自动化重复任务、生成内容，不用招人也能扩展业务。'
  },
  'product.3.title': { en: 'Revenue Dashboard', zh: '营收仪表盘' },
  'product.3.desc': {
    en: 'Track your income streams, expenses, and growth metrics in one beautiful dashboard.',
    zh: '在一个美观的仪表盘中追踪收入来源、支出和增长指标。'
  },

  // Tutorials
  'tutorials.title': { en: 'Tutorials', zh: '教程' },
  'tutorials.subtitle': {
    en: 'Step-by-step guides to help you build and grow',
    zh: '一步步的指南，帮助你构建和成长'
  },
  'tutorials.viewAll': { en: 'View All Tutorials', zh: '查看所有教程' },

  'tutorial.1.title': { en: 'How to Start a One-Person SaaS', zh: '如何启动一人 SaaS' },
  'tutorial.1.desc': {
    en: 'From idea validation to first paying customer — a complete guide for solo founders.',
    zh: '从想法验证到第一个付费客户 —— 独立创始人的完整指南。'
  },
  'tutorial.1.tag': { en: 'Getting Started', zh: '入门' },

  'tutorial.2.title': { en: 'AI Automation for Solopreneurs', zh: '独立创业者的 AI 自动化' },
  'tutorial.2.desc': {
    en: 'Learn how to use AI tools to automate 80% of your daily work and focus on what matters.',
    zh: '学习如何用 AI 工具自动化 80% 的日常工作，专注于真正重要的事。'
  },
  'tutorial.2.tag': { en: 'AI & Automation', zh: 'AI 与自动化' },

  'tutorial.3.title': { en: 'Building in Public: The Complete Guide', zh: '公开构建完整指南' },
  'tutorial.3.desc': {
    en: 'How to share your journey, build an audience, and turn followers into customers.',
    zh: '如何分享你的创业旅程，构建受众群体，将关注者转化为客户。'
  },
  'tutorial.3.tag': { en: 'Marketing', zh: '营销' },

  'tutorial.4.title': { en: 'From Side Project to $10K MRR', zh: '从副业到月入万刀' },
  'tutorial.4.desc': {
    en: 'Real strategies and frameworks to grow your solo business to $10K monthly recurring revenue.',
    zh: '真实的策略和框架，将你的独立业务做到每月 1 万美元经常性收入。'
  },
  'tutorial.4.tag': { en: 'Growth', zh: '增长' },

  // Tools
  'tools.title': { en: 'Recommended Tools', zh: '推荐工具' },
  'tools.subtitle': {
    en: 'The best tools we use and recommend for running a one-person company',
    zh: '我们使用并推荐的最佳一人公司运营工具'
  },

  'tool.category.dev': { en: 'Development', zh: '开发' },
  'tool.category.design': { en: 'Design', zh: '设计' },
  'tool.category.marketing': { en: 'Marketing', zh: '营销' },
  'tool.category.business': { en: 'Business', zh: '商业' },

  // About / Philosophy
  'about.title': { en: 'The One-Person Company Philosophy', zh: '一人公司哲学' },
  'about.subtitle': {
    en: 'We believe that with the right tools and knowledge, one person can build what used to require a team of ten.',
    zh: '我们相信，有了正确的工具和知识，一个人就能完成过去需要十人团队才能做到的事。'
  },
  'about.point.1.title': { en: 'Leverage AI & Automation', zh: '利用 AI 和自动化' },
  'about.point.1.desc': {
    en: 'Use cutting-edge AI tools to multiply your productivity and automate repetitive work.',
    zh: '使用前沿 AI 工具倍增生产力，自动化重复工作。'
  },
  'about.point.2.title': { en: 'Stay Lean, Move Fast', zh: '保持精简，快速行动' },
  'about.point.2.desc': {
    en: 'No bureaucracy, no meetings. Make decisions in minutes, ship features in hours.',
    zh: '没有官僚主义，没有会议。几分钟做决策，几小时发布功能。'
  },
  'about.point.3.title': { en: 'Own Your Freedom', zh: '掌握自由' },
  'about.point.3.desc': {
    en: 'Build a business that serves your lifestyle, not the other way around.',
    zh: '打造服务于你生活方式的事业，而不是被事业所束缚。'
  },

  // Newsletter
  'newsletter.title': { en: 'Stay in the Loop', zh: '保持联系' },
  'newsletter.subtitle': {
    en: 'Get weekly insights on building a one-person company. No spam, just actionable advice.',
    zh: '每周获取一人公司建设的洞察。不发垃圾邮件，只有可执行的建议。'
  },
  'newsletter.placeholder': { en: 'Enter your email', zh: '输入你的邮箱' },
  'newsletter.button': { en: 'Subscribe', zh: '订阅' },

  // Footer
  'footer.tagline': {
    en: 'Building the future, one person at a time.',
    zh: '一个人，构建未来。'
  },
  'footer.resources': { en: 'Resources', zh: '资源' },
  'footer.company': { en: 'Company', zh: '公司' },
  'footer.connect': { en: 'Connect', zh: '联系' },
  'footer.privacy': { en: 'Privacy', zh: '隐私' },
  'footer.terms': { en: 'Terms', zh: '条款' },
  'footer.rights': { en: 'All rights reserved.', zh: '保留所有权利。' },
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('opc-lang')
    if (saved === 'en' || saved === 'zh') {
      setLang(saved)
    } else if (navigator.language.startsWith('zh')) {
      setLang('zh')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('opc-lang', lang)
      document.documentElement.lang = lang
    }
  }, [lang, mounted])

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
