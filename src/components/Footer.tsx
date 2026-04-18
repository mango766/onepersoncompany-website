import { GitBranch, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="py-16 px-6" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))' }}>
                1
              </div>
              <span className="font-semibold text-lg" style={{ color: 'var(--color-text)' }}>OPC.one</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-secondary)' }}>
                <GitBranch size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-secondary)' }}>
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
              {t('footer.resources')}
            </h4>
            <ul className="space-y-3 list-none p-0">
              {['nav.tutorials', 'nav.tools', 'nav.blog'].map(key => (
                <li key={key}>
                  <a href="#" className="text-sm no-underline transition-colors hover:opacity-80"
                    style={{ color: 'var(--color-text-muted)' }}>
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
              {t('nav.products')}
            </h4>
            <ul className="space-y-3 list-none p-0">
              {[1, 2, 3].map(i => (
                <li key={i}>
                  <a href="#" className="text-sm no-underline transition-colors hover:opacity-80"
                    style={{ color: 'var(--color-text-muted)' }}>
                    {t(`product.${i}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
              {t('footer.company')}
            </h4>
            <ul className="space-y-3 list-none p-0">
              {['nav.about', 'footer.privacy', 'footer.terms'].map(key => (
                <li key={key}>
                  <a href="#" className="text-sm no-underline transition-colors hover:opacity-80"
                    style={{ color: 'var(--color-text-muted)' }}>
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center"
          style={{ borderTop: '1px solid var(--color-border)' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            &copy; {new Date().getFullYear()} One Person Company. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
