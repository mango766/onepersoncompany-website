export interface Tutorial {
  slug: string
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
  tag: string
  tagColor: string
  readTime: string
  date: string
}

export const tutorials: Tutorial[] = [
  {
    slug: 'ai-tools-automation',
    titleEn: 'AI-Powered Solopreneur: Replace a 10-Person Team with AI Tools',
    titleZh: 'AI驱动的一人公司：用AI工具替代10人团队',
    descEn: 'From code development, UI design, copywriting to customer support — automate every aspect with AI tools like Cursor, Claude, v0, and more.',
    descZh: '从代码开发、UI设计、文案写作到客户支持，用Cursor、Claude、v0等AI工具自动化每一个环节。',
    tag: 'AI & Automation',
    tagColor: 'bg-violet/10 text-violet',
    readTime: '12 min',
    date: '2026-04-18',
  },
  {
    slug: 'solo-saas-playbook',
    titleEn: 'Solo SaaS Playbook: Validate, Build, and Get Your First 100 Users',
    titleZh: '独立开发者SaaS从0到1：验证想法、构建产品、获取前100个用户',
    descEn: 'Learn from Pieter Levels ($3M/yr), Marc Lou (ShipFast $21K MRR), and Tony Dinh — a proven framework for solo SaaS success.',
    descZh: '从Pieter Levels（年收$3M）、Marc Lou（ShipFast $21K MRR）和Tony Dinh的成功案例中，提炼可复制的SaaS创业框架。',
    tag: 'SaaS',
    tagColor: 'bg-primary/10 text-primary',
    readTime: '15 min',
    date: '2026-04-18',
  },
  {
    slug: 'tech-stack-guide',
    titleEn: 'The Solo Developer Tech Stack Guide 2025-2026',
    titleZh: '2025-2026一人公司技术栈指南',
    descEn: 'Next.js + Supabase + Vercel vs PHP + SQLite — compare two proven approaches and pick the right one for your solo business.',
    descZh: 'Next.js + Supabase + Vercel vs PHP + SQLite — 对比两种主流路线，选择最适合你的技术栈。',
    tag: 'Tech Stack',
    tagColor: 'bg-emerald/10 text-emerald',
    readTime: '10 min',
    date: '2026-04-18',
  },
  {
    slug: 'building-in-public',
    titleEn: 'Building in Public + Content Marketing Complete Guide',
    titleZh: '一人公司的增长引擎：Building in Public + 内容营销完全指南',
    descEn: 'How Marc Lou grew to 135K followers and 20K newsletter subscribers with zero ad spend — and how you can replicate it.',
    descZh: 'Marc Lou如何零广告费增长到13.5万粉丝和2万Newsletter订阅者，以及你如何复制这个路径。',
    tag: 'Marketing',
    tagColor: 'bg-accent/10 text-accent',
    readTime: '13 min',
    date: '2026-04-18',
  },
  {
    slug: 'side-project-to-fulltime',
    titleEn: 'Side Project to Full-Time Solopreneur: A Safe Transition Roadmap',
    titleZh: '从副业到全职独立开发者：不辞职也能创业的安全过渡路线图',
    descEn: 'A phased approach to building your solo business while keeping your day job — when to leap and how to prepare.',
    descZh: '分阶段安全过渡框架，帮你在保持工作稳定性的同时发展独立事业——何时跳槽，如何准备。',
    tag: 'Career',
    tagColor: 'bg-red-500/10 text-red-500',
    readTime: '11 min',
    date: '2026-04-18',
  },
]
