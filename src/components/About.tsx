'use client'

import { Cpu, Zap, Heart } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

const points = [
  { Icon: Cpu, iconClass: 'text-primary bg-primary/10' },
  { Icon: Zap, iconClass: 'text-accent bg-accent/10' },
  { Icon: Heart, iconClass: 'text-red-500 bg-red-500/10' },
]

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-heading">
            {t('about.title')}
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-body">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => {
            const idx = i + 1
            return (
              <div key={i} className="text-center p-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${point.iconClass}`}>
                  <point.Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-heading">
                  {t(`about.point.${idx}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-body">
                  {t(`about.point.${idx}.desc`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
