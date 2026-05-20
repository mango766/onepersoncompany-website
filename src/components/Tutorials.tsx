'use client'

import Link from 'next/link'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { tutorials } from '@/data/tutorials'

const iconColors = [
  'text-primary',
  'text-violet',
  'text-accent',
  'text-emerald',
]

export function Tutorials() {
  const { lang, t } = useI18n()

  return (
    <section id="tutorials" className="py-20 md:py-28 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-heading">
            {t('tutorials.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-body">
            {t('tutorials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tutorials.map((tut, idx) => (
            <Link
              key={tut.slug}
              href={`/tutorials/${tut.slug}`}
              className="hover-lift group rounded-2xl p-8 cursor-pointer bg-bg-s border border-line no-underline block"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tut.tagColor}`}>
                  {tut.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Clock size={12} />
                  {tut.readTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-heading">
                <BookOpen size={18} className={iconColors[idx % iconColors.length]} />
                {lang === 'zh' ? tut.titleZh : tut.titleEn}
              </h3>

              <p className="text-sm leading-relaxed mb-4 text-body">
                {lang === 'zh' ? tut.descZh : tut.descEn}
              </p>

              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                {lang === 'zh' ? '阅读全文' : 'Read more'} <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm no-underline
              text-primary border border-line bg-transparent hover:bg-bg-t transition-all"
          >
            {t('tutorials.viewAll')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
