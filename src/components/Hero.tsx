import { ArrowRight, Sparkles } from 'lucide-react'
import { useI18n } from '../i18n'

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, var(--color-gradient-start), transparent 70%)' }} />
        <div className="absolute top-10 right-10 w-2 h-2 rounded-full opacity-40" style={{ background: 'var(--color-primary)' }} />
        <div className="absolute top-32 left-20 w-1.5 h-1.5 rounded-full opacity-30" style={{ background: 'var(--color-gradient-end)' }} />
        <div className="absolute bottom-20 right-32 w-1 h-1 rounded-full opacity-50" style={{ background: 'var(--color-accent)' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            backgroundColor: 'var(--color-bg-tertiary)',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-border)',
          }}>
          <Sparkles size={14} />
          {t('hero.badge')}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          <span style={{ color: 'var(--color-text)' }}>{t('hero.title.1')}</span>
          <br />
          <span className="gradient-text">{t('hero.title.2')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}>
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base no-underline transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))' }}>
            {t('hero.cta.primary')}
            <ArrowRight size={18} />
          </a>
          <a href="#tutorials"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base no-underline transition-all hover:opacity-80"
            style={{
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
              background: 'transparent',
            }}>
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10"
          style={{ borderTop: '1px solid var(--color-border)' }}>
          {[
            { value: '50+', label: t('stats.tutorials') },
            { value: '100+', label: t('stats.tools') },
            { value: '10K+', label: t('stats.readers') },
            { value: '12', label: t('stats.products') },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
