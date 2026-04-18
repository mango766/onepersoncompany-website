import { Package, Bot, BarChart3, ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n'

const productIcons = [Package, Bot, BarChart3]
const productColors = ['#6366f1', '#8b5cf6', '#f59e0b']

export function Products() {
  const { t } = useI18n()

  const products = [1, 2, 3].map(i => ({
    title: t(`product.${i}.title`),
    desc: t(`product.${i}.desc`),
    Icon: productIcons[i - 1],
    color: productColors[i - 1],
  }))

  return (
    <section id="products" className="py-20 md:py-28 px-6"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            {t('products.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={i} className="hover-card group rounded-2xl p-8 cursor-pointer relative overflow-hidden"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
              }}>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${product.color}15`, color: product.color }}>
                <product.Icon size={24} />
              </div>

              {/* Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{
                  backgroundColor: 'var(--color-bg-tertiary)',
                  color: 'var(--color-text-muted)',
                }}>
                {t('products.coming')}
              </span>

              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2"
                style={{ color: 'var(--color-text)' }}>
                {product.title}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--color-primary)' }} />
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
