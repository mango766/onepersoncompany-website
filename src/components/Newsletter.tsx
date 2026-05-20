'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

type Status = 'idle' | 'loading' | 'success' | 'already' | 'error'

export function Newsletter() {
  const { lang, t } = useI18n()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errMsg, setErrMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    setErrMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'homepage' }),
      })
      const data = await res.json()

      if (!res.ok || !data.ok) {
        setStatus('error')
        setErrMsg(data.error || (lang === 'zh' ? '订阅失败，稍后再试' : 'Subscribe failed, try later'))
        return
      }

      if (data.status === 'already_subscribed') {
        setStatus('already')
      } else {
        setStatus('success')
        setEmail('')
      }

      setTimeout(() => setStatus('idle'), 8000)
    } catch {
      setStatus('error')
      setErrMsg(lang === 'zh' ? '网络错误，请重试' : 'Network error, please retry')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const buttonIcon = () => {
    if (status === 'loading') return <Loader2 size={16} className="animate-spin" />
    if (status === 'success' || status === 'already') return <CheckCircle size={16} />
    if (status === 'error') return <AlertCircle size={16} />
    return <Send size={16} />
  }

  const buttonLabel = () => {
    if (status === 'loading') return lang === 'zh' ? '订阅中...' : 'Subscribing...'
    if (status === 'success') return lang === 'zh' ? '已订阅 ✓' : 'Subscribed ✓'
    if (status === 'already') return lang === 'zh' ? '已在订阅列表' : 'Already subscribed'
    if (status === 'error') return lang === 'zh' ? '重试' : 'Retry'
    return t('newsletter.button')
  }

  return (
    <section className="py-20 md:py-28 px-6 bg-bg-s">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
          {t('newsletter.title')}
        </h2>
        <p className="text-lg mb-10 text-body">
          {t('newsletter.subtitle')}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('newsletter.placeholder')}
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-xl text-sm outline-none bg-bg border border-line text-heading placeholder:text-muted
              focus:border-primary transition-colors disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm
              cursor-pointer border-none bg-gradient-to-br from-primary to-violet
              hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {buttonIcon()}
            {buttonLabel()}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-emerald">
            {lang === 'zh' ? '🎉 感谢订阅！新教程和干货第一时间送你邮箱' : '🎉 Thanks! You\'ll get fresh playbooks straight to your inbox.'}
          </p>
        )}
        {status === 'already' && (
          <p className="mt-4 text-sm text-muted">
            {lang === 'zh' ? '你已经在订阅列表里啦 ✨' : 'You\'re already on the list ✨'}
          </p>
        )}
        {status === 'error' && errMsg && (
          <p className="mt-4 text-sm text-red-500">
            {errMsg}
          </p>
        )}
      </div>
    </section>
  )
}
