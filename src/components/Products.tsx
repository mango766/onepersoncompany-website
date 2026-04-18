import { Package, Bot, BarChart3, ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n'

const products = [
  { icon: Package, color: 'text-primary bg-primary/10' },
  { icon: Bot, color: 'text-violet bg-violet/10' },
  { icon: BarChart3, color: 'text-accent bg-accent/10' },
]

export function Products() {
  const { t } = useI18n()

  return (
    <section id="products" className="py-20 md:py-28 px-6 bg-bg-s">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-heading">
            {t('products.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-body">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const idx = i + 1
            return (
              <div key={i} className="hover-lift group rounded-2xl p-8 cursor-pointer bg-bg border border-line">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${product.color}`}>
                  <product.icon size={24} />
                </div>

                {/* Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-bg-t text-muted">
                  {t('products.coming')}
                </span>

                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-heading">
                  {t(`product.${idx}.title`)}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </h3>

                <p className="text-sm leading-relaxed text-body">
                  {t(`product.${idx}.desc`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
