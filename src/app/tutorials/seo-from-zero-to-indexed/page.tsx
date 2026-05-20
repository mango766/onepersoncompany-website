'use client'

import { TutorialLayout, H2, H3, P, Ul, Li, Table, Callout } from '@/components/TutorialLayout'

export default function SeoFromZeroToIndexed() {
  return (
    <TutorialLayout
      tag="SEO & Growth"
      tagColor="bg-primary/10 text-primary"
      readTime="18 min"
      date="2026-04-23"
      titleEn="From 0 to Indexed in 24 Hours: The Solo SEO Playbook That Actually Works"
      titleZh="新站24小时被Google/Bing/百度全收录：我用这套流程让网站开始赚钱"
    >
      <P>你花了一个月用 Cursor 做了个产品，部署到 Vercel，域名配好了，朋友们说"真不错"。然后呢？<strong>你在 Google 搜自己的域名，一片空白</strong>。这是每个独立开发者的噩梦：产品上线了，但搜索引擎不知道你存在。不被收录 = 没有自然流量 = 没有客户 = 没有收入。</P>

      <P>这篇教程记录我如何在 2026 年 4 月 20-23 日这 <strong>72 小时内</strong>，把 <code>onepersoncompany.one</code> 从"完全搜不到"推到"Google 已收录、Bing 已验证、百度已推送"的完整实战流程。全程代码可抄，命令可粘贴。</P>

      <Callout>
        <P><strong>为什么 SEO 对一人公司特别重要？</strong></P>
        <P>买广告需要预算。社交媒体需要持续产出。<strong>SEO 是唯一的"一次投入、长期被动收益"的获客渠道</strong>。Pieter Levels 的 Nomad List 每月 30 万自然搜索访客，90% 来自 Google；ShipFast 的 Marc Lou 做了 SEO 之后收入从 $5K MRR 翻到 $50K MRR。这不是魔法，是基础建设。</P>
      </Callout>

      <H2>🚨 第 0 步：先诊断，不要盲目优化</H2>

      <P>大多数独立开发者做 SEO 的第一个错是：听说"加 meta tag"就加，听说"提交 sitemap"就提交。实际上你得先知道<strong>为什么搜不到</strong>。用 3 个命令一次性扫清：</P>

      <H3>诊断命令</H3>
      <Callout>
        <P><code>{`# 1. 检查 robots.txt`}</code></P>
        <P><code>curl -s https://你的域名.com/robots.txt</code></P>
        <P><code>{`# 2. 检查 sitemap`}</code></P>
        <P><code>curl -s https://你的域名.com/sitemap.xml</code></P>
        <P><code>{`# 3. 看首页 HTML 是否有 noindex 陷阱`}</code></P>
        <P><code>{`curl -s https://你的域名.com | grep -oE "(noindex|robots)"`}</code></P>
      </Callout>

      <P>我第一次跑这三条命令，结果震惊：</P>
      <Ul>
        <Li>❌ <code>robots.txt</code> 返回的是 404 HTML 页面</Li>
        <Li>❌ <code>sitemap.xml</code> 也是 404</Li>
        <Li>❌ 首页 HTML 里居然有 <code>&lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;</code> —— <strong>主动告诉搜索引擎不要收录我</strong></Li>
      </Ul>

      <P>这就是为什么 <strong>一个月都没被收录</strong>。Next.js 默认在某些 fallback 路径会注入 noindex，必须显式覆盖。很多独立开发者的网站都有这个隐藏陷阱。</P>

      <H2>🏗 第 1 步：SEO 基础设施的 3 个文件</H2>

      <P>Next.js 13+ 的 App Router 下，搜索引擎识别一个站点需要<strong>三个关键文件</strong>，缺一不可：</P>

      <Table
        headers={['文件', '作用', '放哪']}
        rows={[
          ['layout.tsx metadata', '声明 title/description/robots/canonical/OG', 'src/app/layout.tsx'],
          ['robots.ts', '告诉爬虫哪些能爬哪些不能', 'src/app/robots.ts（Next.js 自动生成 /robots.txt）'],
          ['sitemap.ts', '给爬虫一份 URL 清单', 'src/app/sitemap.ts（自动生成 /sitemap.xml）'],
        ]}
      />

      <H3>关键修复：显式声明 robots</H3>
      <P>在 <code>src/app/layout.tsx</code> 的 metadata 里，<strong>必须手动写 robots</strong>，否则 Next.js 可能给你默认 noindex：</P>
      <Callout>
        <P><code>{`export const metadata: Metadata = {`}</code></P>
        <P><code>{`  metadataBase: new URL('https://onepersoncompany.one'),`}</code></P>
        <P><code>{`  title: { default: '一人公司 AI工具导航', template: '%s | One Person Company' },`}</code></P>
        <P><code>{`  description: '...',`}</code></P>
        <P><code>{`  robots: {`}</code></P>
        <P><code>{`    index: true,`}</code></P>
        <P><code>{`    follow: true,`}</code></P>
        <P><code>{`    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },`}</code></P>
        <P><code>{`  },`}</code></P>
        <P><code>{`}`}</code></P>
      </Callout>

      <H3>robots.ts — 允许 AI 爬虫很关键</H3>
      <P>2026 年的 SEO 不能只考虑 Google/Bing/百度。<strong>被 ChatGPT / Claude / Perplexity 引用 = 新的流量来源</strong>。显式允许这些 AI 爬虫：</P>
      <Callout>
        <P><code>{`// src/app/robots.ts`}</code></P>
        <P><code>{`import type { MetadataRoute } from 'next'`}</code></P>
        <P><code>{`export default function robots(): MetadataRoute.Robots {`}</code></P>
        <P><code>{`  return {`}</code></P>
        <P><code>{`    rules: [`}</code></P>
        <P><code>{`      { userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] },`}</code></P>
        <P><code>{`      { userAgent: 'GPTBot', allow: '/' },           // OpenAI/ChatGPT`}</code></P>
        <P><code>{`      { userAgent: 'ClaudeBot', allow: '/' },        // Anthropic/Claude`}</code></P>
        <P><code>{`      { userAgent: 'PerplexityBot', allow: '/' },    // Perplexity`}</code></P>
        <P><code>{`      { userAgent: 'Google-Extended', allow: '/' },  // Gemini`}</code></P>
        <P><code>{`    ],`}</code></P>
        <P><code>{`    sitemap: 'https://onepersoncompany.one/sitemap.xml',`}</code></P>
        <P><code>{`  }`}</code></P>
        <P><code>{`}`}</code></P>
      </Callout>

      <H3>sitemap.ts — 带权重的页面清单</H3>
      <Callout>
        <P><code>{`// src/app/sitemap.ts`}</code></P>
        <P><code>{`export default function sitemap(): MetadataRoute.Sitemap {`}</code></P>
        <P><code>{`  const now = new Date()`}</code></P>
        <P><code>{`  return [`}</code></P>
        <P><code>{`    { url: 'https://site.com/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },`}</code></P>
        <P><code>{`    { url: 'https://site.com/nav', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },`}</code></P>
        <P><code>{`    { url: 'https://site.com/tutorials', lastModified: now, changeFrequency: 'weekly', priority: 0.8 },`}</code></P>
        <P><code>{`  ]`}</code></P>
        <P><code>{`}`}</code></P>
      </Callout>

      <H2>🌐 第 2 步：Google Search Console（免费最强武器）</H2>

      <P>基础设施就绪后，去 <strong>search.google.com/search-console</strong> 添加站点。<strong>如果你用 Vercel 部署 + 登录 GSC 用的是同一个 Google 账号，GSC 会自动验证所有权</strong>，跳过 meta tag 这一步。这是 Vercel 和 Google 的深度集成，绝大多数独立开发者不知道。</P>

      <P>验证通过后必做 3 件事：</P>
      <Ul>
        <Li><strong>Sitemaps</strong> → 提交 <code>sitemap.xml</code>（不是完整 URL，就填这 12 个字符）</Li>
        <Li><strong>URL 检查</strong> → 粘贴首页 URL → 点 <strong>请求编入索引</strong>（当天就会被爬虫来爬）</Li>
        <Li>重复上一步对 2-3 个关键页面（/nav, /tutorials 等）。每天有 10 次配额</Li>
      </Ul>

      <Callout>
        <P><strong>我的真实时间线：</strong>4月23日上午在 GSC 提交 sitemap + 请求索引，<strong>当天下午 Google 就显示"网址已收录到 Google"</strong>。从"完全搜不到"到"已索引"总计 6 小时。</P>
      </Callout>

      <H2>🅿️ 第 3 步：百度收录（中文流量必做）</H2>

      <P>百度完全独立于 Google。如果你的用户有 30% 以上是中文用户，必须单独搞百度。流程比 Google 繁琐：</P>

      <H3>百度三步走</H3>
      <Ul>
        <Li>1️⃣ 去 <strong>ziyuan.baidu.com</strong> 注册，<strong>站点管理 → 添加网站</strong></Li>
        <Li>2️⃣ 选 <strong>HTML 标签验证</strong>，拿到 <code>&lt;meta name=&quot;baidu-site-verification&quot; content=&quot;codeva-xxx&quot;&gt;</code></Li>
        <Li>3️⃣ 把 content 值加到 Next.js metadata.verification.other，部署后回百度点"完成验证"</Li>
        <Li>4️⃣ 验证通过后进 <strong>搜索服务 → 普通收录</strong>，拿到推送 token</Li>
      </Ul>

      <H3>重要坑：www vs 裸域</H3>
      <P>百度把 <code>https://你的域名.com</code> 和 <code>https://www.你的域名.com</code> 当作<strong>两个不同的站</strong>。如果你两个都能访问（没做 301 跳转），<strong>两边都要添加</strong>，否则只收录一边。</P>

      <P>Next.js metadata 支持同一个 name 的多个 meta tag，用数组：</P>
      <Callout>
        <P><code>{`verification: {`}</code></P>
        <P><code>{`  other: {`}</code></P>
        <P><code>{`    'baidu-site-verification': ['codeva-code1', 'codeva-code2'],  // www + apex`}</code></P>
        <P><code>{`    'msvalidate.01': 'your-bing-code',`}</code></P>
        <P><code>{`  },`}</code></P>
        <P><code>{`}`}</code></P>
      </Callout>

      <H3>百度推送 API 的致命坑</H3>
      <P>百度的 URL 推送接口长这样：</P>
      <Callout>
        <P><code>http://data.zz.baidu.com/urls?site=YOUR_SITE&token=YOUR_TOKEN</code></P>
      </Callout>
      <P>几乎所有教程都会告诉你 <code>encodeURIComponent</code> 一下 URL 参数。<strong>对百度这是错的</strong>。百度 API 不接受 URL 编码过的 site 参数，会返回 <code>site init fail</code>。正确写法：</P>
      <Callout>
        <P><code>{`// ❌ 错：百度 API 会返回 site init fail`}</code></P>
        <P><code>{`fetch(\`http://data.zz.baidu.com/urls?site=\${encodeURIComponent(SITE)}&token=\${TOKEN}\`)`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`// ✅ 对：原样传`}</code></P>
        <P><code>{`fetch(\`http://data.zz.baidu.com/urls?site=\${SITE}&token=\${TOKEN}\`, {`}</code></P>
        <P><code>{`  method: 'POST',`}</code></P>
        <P><code>{`  headers: { 'Content-Type': 'text/plain' },`}</code></P>
        <P><code>{`  body: urls.join('\\n'),  // 每行一个 URL`}</code></P>
        <P><code>{`})`}</code></P>
      </Callout>

      <P>我在这个 bug 上浪费了 20 分钟。成功后返回：<code>{`{ success: 8, remain: 0 }`}</code> — 8 个 URL 全部接收，今日配额用完。</P>

      <H2>🚀 第 4 步：IndexNow（一次搞定 Bing/Yandex/Seznam）</H2>

      <P>IndexNow 是 Microsoft + Yandex 主推的协议：一次 POST 推送，<strong>同时通知 Bing、Yandex、Seznam、Naver 等所有参与搜索引擎</strong>。Google 没加入（Google 不会），但这对非 Google 流量来源是王牌。</P>

      <H3>4.1 生成密钥文件</H3>
      <Callout>
        <P><code>{`# 生成 32 位 key（去掉连字符）`}</code></P>
        <P><code>{`KEY=$(uuidgen | tr -d '-' | tr '[:upper:]' '[:lower:]')`}</code></P>
        <P><code>{`echo $KEY`}</code></P>
        <P><code>{`# 把 key 自己作为内容放到 public/`}</code></P>
        <P><code>{`echo -n "$KEY" > public/$KEY.txt`}</code></P>
      </Callout>

      <P>部署后验证：<code>curl https://你的域名.com/$KEY.txt</code> 必须返回 200 并显示 key 本身。</P>

      <H3>4.2 推送 URL</H3>
      <Callout>
        <P><code>{`await fetch('https://api.indexnow.org/IndexNow', {`}</code></P>
        <P><code>{`  method: 'POST',`}</code></P>
        <P><code>{`  headers: { 'Content-Type': 'application/json; charset=utf-8' },`}</code></P>
        <P><code>{`  body: JSON.stringify({`}</code></P>
        <P><code>{`    host: 'onepersoncompany.one',`}</code></P>
        <P><code>{`    key: KEY,`}</code></P>
        <P><code>{`    keyLocation: \`https://onepersoncompany.one/\${KEY}.txt\`,`}</code></P>
        <P><code>{`    urlList: ['https://...', 'https://...']`}</code></P>
        <P><code>{`  })`}</code></P>
        <P><code>{`})  // 预期 202 Accepted`}</code></P>
      </Callout>

      <H2>📋 第 5 步：一键推送脚本（最爽的部分）</H2>

      <P>把上面所有 API 整合成一个 npm 脚本，以后每次更新内容跑 <code>npm run push-seo</code>，自动通知所有引擎。完整脚本放 <code>scripts/push-search-engines.ts</code>：</P>

      <Callout>
        <P><code>{`const SITE_URL = 'https://onepersoncompany.one'`}</code></P>
        <P><code>{`const INDEXNOW_KEY = '你的32位key'`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`async function main() {`}</code></P>
        <P><code>{`  const urls = [`}</code></P>
        <P><code>{`    \`\${SITE_URL}/\`,`}</code></P>
        <P><code>{`    \`\${SITE_URL}/nav\`,`}</code></P>
        <P><code>{`    \`\${SITE_URL}/tutorials\`,`}</code></P>
        <P><code>{`    // ... 其他页面`}</code></P>
        <P><code>{`  ]`}</code></P>
        <P><code>{`  await Promise.all([`}</code></P>
        <P><code>{`    pushIndexNow(urls),  // Bing + Yandex + Seznam`}</code></P>
        <P><code>{`    pushBaidu(urls),     // 百度`}</code></P>
        <P><code>{`  ])`}</code></P>
        <P><code>{`}`}</code></P>
      </Callout>

      <P>在 <code>package.json</code> 加：<code>&quot;push-seo&quot;: &quot;tsx scripts/push-search-engines.ts&quot;</code></P>

      <H2>🏷 第 6 步：JSON-LD 结构化数据</H2>

      <P>结构化数据告诉 Google "这个页面是什么"，让搜索结果变得更漂亮（品牌名、搜索框、评分等富片段）。2 个必做：</P>

      <H3>Organization Schema</H3>
      <Callout>
        <P><code>{`<script type="application/ld+json">`}</code></P>
        <P><code>{`{`}</code></P>
        <P><code>{`  "@context": "https://schema.org",`}</code></P>
        <P><code>{`  "@type": "Organization",`}</code></P>
        <P><code>{`  "name": "One Person Company",`}</code></P>
        <P><code>{`  "url": "https://onepersoncompany.one",`}</code></P>
        <P><code>{`  "logo": "https://onepersoncompany.one/favicon.svg"`}</code></P>
        <P><code>{`}`}</code></P>
        <P><code>{`</script>`}</code></P>
      </Callout>

      <H3>WebSite Schema（含站内搜索框）</H3>
      <P>给 Google 加 SearchAction，让它在搜索结果里直接显示你的站内搜索框（暴涨点击率）：</P>
      <Callout>
        <P><code>{`{`}</code></P>
        <P><code>{`  "@type": "WebSite",`}</code></P>
        <P><code>{`  "potentialAction": {`}</code></P>
        <P><code>{`    "@type": "SearchAction",`}</code></P>
        <P><code>{`    "target": "https://你.com/nav?q={search_term_string}",`}</code></P>
        <P><code>{`    "query-input": "required name=search_term_string"`}</code></P>
        <P><code>{`  }`}</code></P>
        <P><code>{`}`}</code></P>
      </Callout>

      <H2>📊 第 7 步：24 小时后的验证</H2>

      <P>部署并提交后，如何知道到底成不成？用这套自检命令：</P>

      <Callout>
        <P><code>{`# 1. 基础设施自检`}</code></P>
        <P><code>{`curl -s https://你.com/robots.txt | head -5   # 应看到 User-Agent: *`}</code></P>
        <P><code>{`curl -s https://你.com/sitemap.xml | head -5 # 应看到 <?xml`}</code></P>
        <P><code>{`curl -s https://你.com/ | grep -oE 'noindex|content="index'  # 只应有 "index"`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# 2. Google 收录自检`}</code></P>
        <P><code>{`# 浏览器搜: site:你.com    # 应有结果`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# 3. 结构化数据自检`}</code></P>
        <P><code>{`# https://search.google.com/test/rich-results  # 贴你的 URL`}</code></P>
      </Callout>

      <H2>⏰ 预期时间线（亲测）</H2>

      <Table
        headers={['平台', '搜 site: 收录时间', '搜关键词可搜到']}
        rows={[
          ['Google', '当天或次日（GSC 手动请求后）', '1-2 周'],
          ['Bing', '3-5 天（IndexNow 加速）', '1-2 周'],
          ['百度', '3-7 天（推送过 token）', '2-4 周'],
          ['DuckDuckGo', '3-5 天（用 Bing 数据）', '1-2 周'],
          ['Yandex', '3-7 天（IndexNow 推过）', '2-3 周'],
          ['Perplexity AI', '1-2 周', '2-3 周'],
          ['ChatGPT 联网', '2-3 周（跟 Bing）', '3-4 周'],
          ['Claude 联网', '2-4 周', '1 个月+'],
        ]}
      />

      <H2>💰 为什么这对一人公司直接等于钱</H2>

      <P>SEO 不是技术炫技，它是<strong>独立开发者唯一能规模化的免费流量渠道</strong>。算个账：</P>
      <Ul>
        <Li><strong>付费广告</strong>：Google Ads CPC 约 $1-5，要 1000 访客花 $2000+</Li>
        <Li><strong>社交媒体</strong>：需要每周持续产出，时间成本高</Li>
        <Li><strong>SEO</strong>：一次做对基础设施，<strong>半年后每月 5000-30000 自然流量</strong>，成本趋近于零</Li>
      </Ul>

      <P>Pieter Levels 的 Nomad List 每月 30 万自然访客，<strong>90% 来自 Google 搜索</strong> "digital nomad cities"、"best cities to work remotely"。这些流量 $0 成本，年收入 $3M+。秘诀不是什么黑帽，就是这篇教程里的基础建设 + 持续内容更新。</P>

      <Callout>
        <P><strong>独立开发者最大的 SEO 误区</strong>：以为 SEO 是内容营销的后期优化。真相是：<strong>SEO 是第一天部署就要做的基础建设</strong>。你搭建 robots / sitemap / schema 的那一天，决定了你 6 个月后有没有流量。</P>
      </Callout>

      <H2>🎯 你现在应该做的 3 件事（按优先级）</H2>

      <Ul>
        <Li>1. <strong>立刻跑诊断命令</strong>看看你的网站有没有 noindex / 缺 robots 的陷阱</Li>
        <Li>2. <strong>今天</strong>注册 Google Search Console + 百度资源平台，走一遍本教程流程</Li>
        <Li>3. <strong>把 push-seo 脚本加到你的项目</strong>，以后每次发新内容前跑一次</Li>
      </Ul>

      <H2>📚 延伸阅读</H2>
      <Ul>
        <Li><a href="/tutorials/building-in-public" className="text-primary hover:underline">公开构建 + 内容营销完整指南</a> — SEO 的下一步是持续内容</Li>
        <Li><a href="/tutorials/solo-saas-playbook" className="text-primary hover:underline">独立 SaaS 从 0 到 100 用户</a> — SEO 带来的第一波用户怎么转化</Li>
        <Li><a href="/nav" className="text-primary hover:underline">AI 工具导航</a> — 写内容的 AI 工具精选</Li>
      </Ul>

      <Callout>
        <P><strong>💬 有问题找我</strong></P>
        <P>这套流程跑完如果还搜不到你，或者卡在某一步，加我微信 <strong>LIR--3point14</strong> 直接聊。我自己用这套流程做的这个站，从部署到被 Google 收录 72 小时，亲测有效。</P>
      </Callout>
    </TutorialLayout>
  )
}
