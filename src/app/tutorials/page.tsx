'use client'

import { Clock, BookOpen, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { tutorials } from '@/data/tutorials'
import Link from 'next/link'

export default function TutorialsPage() {
  const { lang } = useI18n()

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="pt-28 pb-16 px-6 bg-bg-s border-b border-line">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted hover:text-heading transition-colors no-underline mb-6">
            <ArrowLeft size={14} />
            {lang === 'zh' ? '返回首页' : 'Back to Home'}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            {lang === 'zh' ? '教程' : 'Tutorials'}
          </h1>
          <p className="text-lg text-body max-w-2xl">
            {lang === 'zh'
              ? '一人公司建设的完整指南系列。从AI工具自动化到SaaS创业，从技术栈选择到内容营销。'
              : 'Complete guide series for building a one-person company. From AI automation to SaaS creation, tech stack to content marketing.'}
          </p>
        </div>
      </div>

      {/* Tutorial List */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {tutorials.map((t) => {
            const isExternal = !!t.externalUrl
            const href = isExternal ? t.externalUrl! : `/tutorials/${t.slug}`

            const cardContent = (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${t.tagColor}`}>
                    {t.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Clock size={12} />
                    {t.readTime}
                  </span>
                  <span className="text-xs text-muted">{t.date}</span>
                  {isExternal && (
                    <span className="flex items-center gap-1 text-xs text-primary font-medium">
                      <ExternalLink size={11} />
                      {lang === 'zh' ? '外部链接' : 'External'}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 text-heading">
                  <BookOpen size={20} className="text-primary shrink-0" />
                  {lang === 'zh' ? t.titleZh : t.titleEn}
                </h2>

                <p className="text-sm leading-relaxed mb-4 text-body">
                  {lang === 'zh' ? t.descZh : t.descEn}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  {isExternal
                    ? (lang === 'zh' ? '在线阅读' : 'Read online')
                    : (lang === 'zh' ? '阅读全文' : 'Read more')
                  } <ArrowRight size={14} />
                </span>
              </>
            )

            if (isExternal) {
              return (
                <a
                  key={t.slug}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover-lift group rounded-2xl p-8 bg-bg-s border border-line no-underline"
                >
                  {cardContent}
                </a>
              )
            }

            return (
              <Link
                key={t.slug}
                href={href}
                className="block hover-lift group rounded-2xl p-8 bg-bg-s border border-line no-underline"
              >
                {cardContent}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
