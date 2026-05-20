'use client'

import { GitBranch, MessageCircle, Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '@/components/providers/I18nProvider'

export function Footer() {
  const { lang, t } = useI18n()
  const [copied, setCopied] = useState(false)

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText('LIR--3point14')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

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
              <span className="font-semibold text-lg text-heading">{lang === 'zh' ? '一人公司.one' : 'OPC.one'}</span>
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

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-heading">{t('footer.connect')}</h4>
            <p className="text-xs text-muted mb-2">
              {lang === 'zh' ? '加微信聊聊一人公司' : 'WeChat me to chat about solopreneur life'}
            </p>
            <button
              onClick={copyWechat}
              className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-s border border-line-light hover:border-primary/50 hover:bg-bg-t transition-all cursor-pointer"
              title={lang === 'zh' ? '点击复制微信号' : 'Click to copy WeChat ID'}
            >
              <span className="text-xs font-mono text-heading">LIR--3point14</span>
              {copied ? (
                <Check size={14} className="text-emerald" />
              ) : (
                <Copy size={14} className="text-muted group-hover:text-heading transition-colors" />
              )}
            </button>
            {copied && (
              <p className="text-[10px] text-emerald mt-1.5">
                {lang === 'zh' ? '已复制，去微信搜索添加' : 'Copied! Search on WeChat'}
              </p>
            )}
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

