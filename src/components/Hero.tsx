import { ArrowRight, Sparkles } from 'lucide-react'
import { useI18n } from '../i18n'

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.07]
          blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8
          bg-bg-t text-primary border border-line">
          <Sparkles size={14} />
          {t('hero.badge')}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-heading">
          {t('hero.title.1')}
          <br />
          <span className="gradient-text">{t('hero.title.2')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-body">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base no-underline
              bg-gradient-to-br from-primary to-violet hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all">
            {t('hero.cta.primary')}
            <ArrowRight size={18} />
          </a>
          <a href="#tutorials"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base no-underline
              text-heading border border-line bg-transparent hover:bg-bg-t transition-all">
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-line">
          {[
            { value: '50+', label: t('stats.tutorials') },
            { value: '100+', label: t('stats.tools') },
            { value: '10K+', label: t('stats.readers') },
            { value: '12', label: t('stats.products') },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm mt-1 text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
