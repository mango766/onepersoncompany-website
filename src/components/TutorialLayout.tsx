'use client'

import { ArrowLeft, Clock, BookOpen } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import Link from 'next/link'

interface TutorialLayoutProps {
  tag: string
  tagColor: string
  readTime: string
  date: string
  titleEn: string
  titleZh: string
  children: React.ReactNode
}

export function TutorialLayout({ tag, tagColor, readTime, date, titleEn, titleZh, children }: TutorialLayoutProps) {
  const { lang } = useI18n()

  return (
    <div className="min-h-screen bg-bg">
      <div className="pt-28 pb-12 px-6 bg-bg-s border-b border-line">
        <div className="max-w-3xl mx-auto">
          <Link href="/tutorials" className="inline-flex items-center gap-1 text-sm text-muted hover:text-heading transition-colors no-underline mb-6">
            <ArrowLeft size={14} />
            {lang === 'zh' ? '返回教程列表' : 'Back to Tutorials'}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColor}`}>{tag}</span>
            <span className="flex items-center gap-1 text-xs text-muted"><Clock size={12} />{readTime}</span>
            <span className="text-xs text-muted">{date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
            <BookOpen size={28} className="inline text-primary mr-2" />
            {lang === 'zh' ? titleZh : titleEn}
          </h1>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12 prose-custom">
        {children}
      </article>
    </div>
  )
}

// Reusable styled components for tutorial content
export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-heading mt-12 mb-4 flex items-center gap-2">{children}</h2>
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-heading mt-8 mb-3">{children}</h3>
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-body leading-relaxed mb-4">{children}</p>
}

export function Li({ children }: { children: React.ReactNode }) {
  return <li className="text-body leading-relaxed mb-2">{children}</li>
}

export function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 mb-6 space-y-1">{children}</ul>
}

export function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-8 rounded-xl border border-line">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-bg-t border-b border-line">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 font-medium text-muted">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line-light">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-body">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6 text-body">
      {children}
    </div>
  )
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-bg-t border border-line rounded-xl p-4 mb-6 overflow-x-auto text-sm text-body font-mono">
      {children}
    </pre>
  )
}
