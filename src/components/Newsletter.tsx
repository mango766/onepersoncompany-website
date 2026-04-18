import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { useI18n } from '../i18n'

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
    <section className="py-20 md:py-28 px-6"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          {t('newsletter.title')}
        </h2>
        <p className="text-lg mb-10" style={{ color: 'var(--color-text-secondary)' }}>
          {t('newsletter.subtitle')}
        </p>

        <form onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('newsletter.placeholder')}
            required
            className="flex-1 px-4 py-3 rounded-xl text-sm outline-none transition-all"
            style={{
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
          />
          <button type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm cursor-pointer border-none transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))' }}>
            {submitted ? <CheckCircle size={16} /> : <Send size={16} />}
            {t('newsletter.button')}
          </button>
        </form>
      </div>
    </section>
  )
}
