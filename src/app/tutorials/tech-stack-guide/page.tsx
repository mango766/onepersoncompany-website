'use client'

import { TutorialLayout, H2, H3, P, Ul, Li, Table, Callout, CodeBlock } from '@/components/TutorialLayout'

export default function TechStackGuide() {
  return (
    <TutorialLayout
      tag="Tech Stack"
      tagColor="bg-emerald/10 text-emerald"
      readTime="10 min"
      date="2026-04-18"
      titleEn="The Solo Developer Tech Stack Guide 2025-2026"
      titleZh="2025-2026一人公司技术栈指南"
    >
      <P>独立开发者的技术栈选择核心原则是：<strong>简单、统一、低维护成本</strong>。本教程对比两种主流路线，帮你根据自身情况选择最适合的技术栈。</P>

      <H2>路线A：现代全栈（推荐大多数人）</H2>
      <CodeBlock>{`前端: Next.js (App Router) + Tailwind CSS + shadcn/ui
后端: Next.js API Routes / Server Actions
数据库: Supabase (PostgreSQL + Auth + Storage)
部署: Vercel
支付: Stripe / Lemon Squeezy
邮件: Resend
分析: PostHog / Plausible
域名: Cloudflare`}</CodeBlock>
      <H3>为什么这套栈适合Solo Developer</H3>
      <Ul>
        <Li>Next.js全栈一体，前后端用同一语言（TypeScript）</Li>
        <Li>Supabase提供数据库+认证+文件存储，省去搭建后端的大量工作</Li>
        <Li>Vercel一键部署，自动CI/CD，零运维</Li>
        <Li>全部有免费额度，启动成本接近$0</Li>
      </Ul>

      <H2>路线B：Pieter Levels极简路线</H2>
      <CodeBlock>{`后端: Vanilla PHP
前端: jQuery + 原生HTML/CSS
数据库: SQLite
服务器: 单台VPS ($10-20/月)
部署: 直接rsync / git pull`}</CodeBlock>
      <Callout>
        <P>Pieter Levels用这套栈做到 <strong>$3M/年</strong>，服务器仅$384/月跑所有产品。极低维护成本，没有依赖地狱。缺点：不适合需要复杂前端交互的应用。</P>
      </Callout>

      <H2>认证方案对比</H2>
      <Table
        headers={['方案', '优点', '缺点', '费用']}
        rows={[
          ['Supabase Auth', '集成数据库，简单', '绑定Supabase', '免费'],
          ['Clerk', '体验好，组件丰富', '用户多了会贵', '免费-$25'],
          ['NextAuth/Auth.js', '开源，灵活', '需要自己维护', '免费'],
        ]}
      />

      <H2>支付方案</H2>
      <Ul>
        <Li><strong>Stripe</strong>：最成熟，全球支持，但需要企业/个人资质</Li>
        <Li><strong>Lemon Squeezy</strong>：Merchant of Record，帮你处理各国税务，特别适合海外独立开发者</Li>
        <Li><strong>Paddle</strong>：类似Lemon Squeezy，更适合B2B SaaS</Li>
      </Ul>

      <H2>部署与运维</H2>
      <Table
        headers={['平台', '适合场景', '费用']}
        rows={[
          ['Vercel', 'Next.js最佳，免费额度慷慨', '免费-$20/月'],
          ['Railway', '需要后台任务/长时间运行', '$5/月起'],
          ['Cloudflare Workers', '边缘计算，极低延迟', '免费-$5/月'],
          ['Hetzner VPS', '成本最低，控制力最强', '€4/月起'],
        ]}
      />

      <H2>选择决策树</H2>
      <CodeBlock>{`你是否熟悉JavaScript/TypeScript？
├── 是 → Next.js + Supabase + Vercel
├── 否，但熟悉Python → Django/FastAPI + Supabase + Railway
├── 否，但熟悉PHP → Laravel/原生PHP + MySQL/SQLite + VPS
└── 都不熟 → 先学JavaScript，走路线A`}</CodeBlock>

      <H2>推荐启动模板</H2>
      <Table
        headers={['模板', '包含内容', '价格']}
        rows={[
          ['ShipFast', 'Next.js + Stripe + Auth + Email', '$199-299'],
          ['Shipixen', 'Next.js + MDX + Landing生成', '$149'],
          ['SaaSfly', 'Next.js + i18n + Auth + 多种支付', '开源免费'],
          ['Supabase Starter', '官方模板', '免费'],
        ]}
      />
    </TutorialLayout>
  )
}
