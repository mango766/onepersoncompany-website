import { Cpu, Zap, Heart } from 'lucide-react'
import { useI18n } from '../i18n'

const icons = [Cpu, Zap, Heart]
const colors = ['#6366f1', '#f59e0b', '#ef4444']

export function About() {
  const { t } = useI18n()

  const points = [1, 2, 3].map(i => ({
    title: t(`about.point.${i}.title`),
    desc: t(`about.point.${i}.desc`),
    Icon: icons[i - 1],
    color: colors[i - 1],
  }))

  return (
    <section id="about" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
            {t('about.title')}
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}>
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div key={i} className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${point.color}10`, color: point.color }}>
                <point.Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
