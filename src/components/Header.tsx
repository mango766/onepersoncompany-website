'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Sun, Moon, Globe, MessageCircle, Copy, Check } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { useI18n } from '@/components/providers/I18nProvider'
import Link from 'next/link'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { key: 'nav.products', href: '#products' },
    { key: 'nav.tutorials', href: '/tutorials' },
    { key: 'nav.tools', href: '/nav' },
    { key: 'nav.about', href: '#about' },
  ]

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText('LIR--3point14')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  // Close contact popover on outside click
  useEffect(() => {
    if (!contactOpen) return
    const handler = (e: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setContactOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [contactOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-xl border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-primary to-violet">
            1
          </div>
          <span className="font-semibold text-lg text-heading">
            {lang === 'zh' ? '一人公司' : 'OPC'}<span className="hidden sm:inline text-muted">.one</span>
          </span>
        </Link>
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
          {/* Contact button + popover */}
          <div className="relative" ref={contactRef}>
            <button
              onClick={() => setContactOpen(v => !v)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 ml-1 rounded-lg text-sm font-medium text-white bg-gradient-to-br from-primary to-violet hover:opacity-90 hover:scale-[1.02] transition-all cursor-pointer border-none">
              <MessageCircle size={14} />
              {t('nav.contact')}
            </button>
            <button
              onClick={() => setContactOpen(v => !v)}
              className="sm:hidden p-2 rounded-lg text-white bg-gradient-to-br from-primary to-violet hover:opacity-90 transition-all cursor-pointer border-none"
              title={t('nav.contact')}>
              <MessageCircle size={16} />
            </button>

            {contactOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 rounded-xl bg-bg-s border border-line shadow-2xl p-4 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading">
                      {lang === 'zh' ? '加微信聊聊' : 'WeChat me'}
                    </p>
                    <p className="text-[11px] text-muted">
                      {lang === 'zh' ? '合作/咨询/交流都欢迎' : 'Collabs, questions, chats welcome'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={copyWechat}
                  className="group w-full mt-2 flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg bg-bg-t border border-line-light hover:border-primary/50 hover:bg-bg transition-all cursor-pointer">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-muted shrink-0">
                      {lang === 'zh' ? '微信号' : 'WeChat'}
                    </span>
                    <span className="text-sm font-mono font-semibold text-heading truncate">LIR--3point14</span>
                  </div>
                  {copied ? (
                    <Check size={16} className="text-emerald shrink-0" />
                  ) : (
                    <Copy size={14} className="text-muted group-hover:text-primary transition-colors shrink-0" />
                  )}
                </button>
                <p className="text-[11px] text-muted mt-2 text-center">
                  {copied
                    ? (lang === 'zh' ? '✓ 已复制，打开微信搜索添加' : '✓ Copied! Open WeChat to add')
                    : (lang === 'zh' ? '点击复制微信号' : 'Click to copy WeChat ID')}
                </p>
              </div>
            )}
          </div>

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
