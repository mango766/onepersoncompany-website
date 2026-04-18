import { GitBranch, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="py-16 px-6 border-t border-line bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm
                bg-gradient-to-br from-primary to-violet">
                1
              </div>
              <span className="font-semibold text-lg text-heading">OPC.one</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-muted">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-bg-t text-body hover:text-heading hover:scale-110 transition-all">
                <GitBranch size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-bg-t text-body hover:text-heading hover:scale-110 transition-all">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-heading">{t('footer.resources')}</h4>
            <ul className="space-y-3 list-none p-0">
              {['nav.tutorials', 'nav.tools', 'nav.blog'].map(key => (
                <li key={key}>
                  <a href="#" className="text-sm no-underline text-muted hover:text-heading transition-colors">{t(key)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-heading">{t('nav.products')}</h4>
            <ul className="space-y-3 list-none p-0">
              {[1, 2, 3].map(i => (
                <li key={i}>
                  <a href="#" className="text-sm no-underline text-muted hover:text-heading transition-colors">{t(`product.${i}.title`)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-heading">{t('footer.company')}</h4>
            <ul className="space-y-3 list-none p-0">
              {['nav.about', 'footer.privacy', 'footer.terms'].map(key => (
                <li key={key}>
                  <a href="#" className="text-sm no-underline text-muted hover:text-heading transition-colors">{t(key)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center border-t border-line">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} One Person Company. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
