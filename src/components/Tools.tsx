import { Code2, Palette, Megaphone, Briefcase, ExternalLink } from 'lucide-react'
import { useI18n } from '../i18n'

interface Tool {
  name: string
  desc: string
  url: string
}

interface Category {
  key: string
  Icon: typeof Code2
  color: string
  tools: Tool[]
}

const categories: Category[] = [
  {
    key: 'tool.category.dev',
    Icon: Code2,
    color: '#6366f1',
    tools: [
      { name: 'Vercel', desc: 'Deploy & host', url: 'https://vercel.com' },
      { name: 'Supabase', desc: 'Backend as a Service', url: 'https://supabase.com' },
      { name: 'Cursor', desc: 'AI code editor', url: 'https://cursor.com' },
      { name: 'GitHub', desc: 'Code hosting', url: 'https://github.com' },
    ],
  },
  {
    key: 'tool.category.design',
    Icon: Palette,
    color: '#8b5cf6',
    tools: [
      { name: 'Figma', desc: 'UI design', url: 'https://figma.com' },
      { name: 'Framer', desc: 'Website builder', url: 'https://framer.com' },
      { name: 'Midjourney', desc: 'AI images', url: 'https://midjourney.com' },
      { name: 'Canva', desc: 'Quick graphics', url: 'https://canva.com' },
    ],
  },
  {
    key: 'tool.category.marketing',
    Icon: Megaphone,
    color: '#f59e0b',
    tools: [
      { name: 'Resend', desc: 'Email API', url: 'https://resend.com' },
      { name: 'PostHog', desc: 'Analytics', url: 'https://posthog.com' },
      { name: 'Buffer', desc: 'Social media', url: 'https://buffer.com' },
      { name: 'Typefully', desc: 'Twitter growth', url: 'https://typefully.com' },
    ],
  },
  {
    key: 'tool.category.business',
    Icon: Briefcase,
    color: '#10b981',
    tools: [
      { name: 'Stripe', desc: 'Payments', url: 'https://stripe.com' },
      { name: 'Notion', desc: 'Knowledge base', url: 'https://notion.so' },
      { name: 'Cal.com', desc: 'Scheduling', url: 'https://cal.com' },
      { name: 'Lemon Squeezy', desc: 'Digital sales', url: 'https://lemonsqueezy.com' },
    ],
  },
]

export function Tools() {
  const { t } = useI18n()

  return (
    <section id="tools" className="py-20 md:py-28 px-6"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            {t('tools.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            {t('tools.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
              }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>
                  <cat.Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                  {t(cat.key)}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cat.tools.map((tool, j) => (
                  <a key={j} href={tool.url} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-xl no-underline transition-all hover:scale-[1.02]"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border-light)',
                    }}>
                    <div>
                      <div className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                        {tool.name}
                      </div>
                      <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {tool.desc}
                      </div>
                    </div>
                    <ExternalLink size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                      style={{ color: 'var(--color-text-muted)' }} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
