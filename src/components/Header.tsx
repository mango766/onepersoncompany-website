import { useState } from 'react'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { useTheme } from '../theme'
import { useI18n } from '../i18n'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { key: 'nav.products', href: '#products' },
    { key: 'nav.tutorials', href: '#tutorials' },
    { key: 'nav.tools', href: '#tools' },
    { key: 'nav.about', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-xl border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-primary to-violet">
            1
          </div>
          <span className="font-semibold text-lg text-heading">
            OPC<span className="hidden sm:inline text-muted">.one</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a key={item.key} href={item.href}
              className="text-sm font-medium no-underline text-body hover:text-heading transition-colors">
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="p-2 rounded-lg text-body hover:text-heading hover:bg-bg-t transition-colors cursor-pointer border-none bg-transparent"
            title={lang === 'en' ? '切换中文' : 'Switch to English'}>
            <Globe size={18} />
          </button>
          <button onClick={toggleTheme}
            className="p-2 rounded-lg text-body hover:text-heading hover:bg-bg-t transition-colors cursor-pointer border-none bg-transparent">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-body cursor-pointer border-none bg-transparent">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-line bg-bg px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <a key={item.key} href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium no-underline text-body hover:text-heading">
              {t(item.key)}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
