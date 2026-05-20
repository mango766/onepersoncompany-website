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
  /** 草稿教程：不在列表页/sitemap/推送中出现，直接访问 URL 仍可看到 */
  hidden?: boolean
  /** 外链教程：点击后新窗口打开外部 URL，不走站内路由 */
  externalUrl?: string
}

const allTutorials: Tutorial[] = [
  {
    slug: 'founders-playbook',
    titleEn: "The Founder's Playbook: Building an AI-Native Startup (Chinese Edition)",
    titleZh: '创始人实战手册：打造 AI 原生创业公司（中文全译版）',
    descEn: 'Full Chinese translation of Anthropic\'s 2026 Founder\'s Playbook — from Idea to Scale in the AI era. Covers validation, MVP, launch, and building defensible moats as a lean team.',
    descZh: 'Anthropic 2026 年创业方法论完整中文版。从想法验证到规模化的四阶段路径：用 AI 做客户发现、用 Claude Code 构建 MVP、把牵引力转化为增长引擎、构建竞争护城河。',
    tag: 'AI Startup',
    tagColor: 'bg-primary/10 text-primary',
    readTime: '45 min',
    date: '2026-05-19',
    externalUrl: 'https://mango766.github.io/founders-playbook/',
  },
  {
    slug: 'seo-from-zero-to-indexed',
    titleEn: 'From 0 to Indexed in 24 Hours: The Solo SEO Playbook That Actually Works',
    titleZh: '新站24小时被Google/Bing/百度全收录：我用这套流程让网站开始赚钱',
    descEn: 'Real playbook used on onepersoncompany.one — how to go from "nobody can find me" to indexed on Google/Bing/Baidu in 24 hours. No theory, just curl commands and code you can copy.',
    descZh: '亲测有效的SEO实战流程：从"搜不到你"到Google已收录/Bing已验证/百度已推送，全程24小时。无理论无废话，只有可直接抄的代码和命令。新站获客从这里开始。',
    tag: 'SEO & Growth',
    tagColor: 'bg-primary/10 text-primary',
    readTime: '18 min',
    date: '2026-04-23',
  },
  {
    slug: 'launch-your-website-from-zero',
    titleEn: 'Launch Your Personal / Company Website from Zero (China-Friendly)',
    titleZh: '0到1上线你的个人/公司网站（国内友好）— 全年 ¥85 的现代建站方案',
    descEn: 'NameSilo + Cloudflare + GitHub + Vercel for $12/year. Covers Alipay payment, China-region optimization, ICP filing workarounds. The modern replacement for website-building agencies.',
    descZh: '抛弃建站公司的完整替代方案：NameSilo + Cloudflare + GitHub + Vercel，全年 ¥85。含支付宝付款、国内访问优化、ICP 备案替代方案。一人公司/独立开发者建站首选。',
    tag: '建站 & 部署',
    tagColor: 'bg-emerald/10 text-emerald',
    readTime: '20 min',
    date: '2026-04-23',
  },
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
  },
]

/** 对外展示的教程（过滤掉 hidden 的） */
export const tutorials: Tutorial[] = allTutorials.filter(t => !t.hidden)

/** 全部教程（含草稿）— 只在内部工具如 sitemap/push 脚本中使用 */
export const allTutorialsIncludingHidden = allTutorials
