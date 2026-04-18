import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { useI18n } from '../i18n'

const tagColors = ['#6366f1', '#8b5cf6', '#f59e0b', '#10b981']

export function Tutorials() {
  const { t } = useI18n()

  const tutorials = [1, 2, 3, 4].map(i => ({
    title: t(`tutorial.${i}.title`),
    desc: t(`tutorial.${i}.desc`),
    tag: t(`tutorial.${i}.tag`),
    color: tagColors[i - 1],
    readTime: `${5 + i * 2} min`,
  }))

  return (
    <section id="tutorials" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            {t('tutorials.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            {t('tutorials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tutorials.map((tutorial, i) => (
            <article key={i} className="hover-card group rounded-2xl p-8 cursor-pointer"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
              }}>
              {/* Tag + Read time */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: `${tutorial.color}15`, color: tutorial.color }}>
                  {tutorial.tag}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  <Clock size={12} />
                  {tutorial.readTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"
                style={{ color: 'var(--color-text)' }}>
                <BookOpen size={18} style={{ color: tutorial.color }} />
                {tutorial.title}
              </h3>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                {tutorial.desc}
              </p>

              <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                style={{ color: 'var(--color-primary)' }}>
                Read more <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm no-underline transition-all hover:opacity-80"
            style={{
              color: 'var(--color-primary)',
              border: '1px solid var(--color-border)',
              background: 'transparent',
            }}>
            {t('tutorials.viewAll')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
