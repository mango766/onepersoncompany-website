'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function Newsletter() {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setEmail('')
    }
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
            className="flex-1 px-4 py-3 rounded-xl text-sm outline-none bg-bg border border-line text-heading placeholder:text-muted
              focus:border-primary transition-colors"
          />
          <button type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm
              cursor-pointer border-none bg-gradient-to-br from-primary to-violet
              hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all">
            {submitted ? <CheckCircle size={16} /> : <Send size={16} />}
            {t('newsletter.button')}
          </button>
        </form>
      </div>
    </section>
  )
}
