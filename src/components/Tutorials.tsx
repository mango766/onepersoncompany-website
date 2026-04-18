import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { useI18n } from '../i18n'

const tagStyles = [
  'bg-primary/10 text-primary',
  'bg-violet/10 text-violet',
  'bg-accent/10 text-accent',
  'bg-emerald/10 text-emerald',
]

const iconColors = ['text-primary', 'text-violet', 'text-accent', 'text-emerald']

export function Tutorials() {
  const { t } = useI18n()

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
          {[1, 2, 3, 4].map((idx) => (
            <article key={idx} className="hover-lift group rounded-2xl p-8 cursor-pointer bg-bg-s border border-line">
              {/* Tag + Read time */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagStyles[idx - 1]}`}>
                  {t(`tutorial.${idx}.tag`)}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Clock size={12} />
                  {5 + idx * 2} min
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-heading">
                <BookOpen size={18} className={iconColors[idx - 1]} />
                {t(`tutorial.${idx}.title`)}
              </h3>

              <p className="text-sm leading-relaxed mb-4 text-body">
                {t(`tutorial.${idx}.desc`)}
              </p>

              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm no-underline
            text-primary border border-line bg-transparent hover:bg-bg-t transition-all">
            {t('tutorials.viewAll')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
