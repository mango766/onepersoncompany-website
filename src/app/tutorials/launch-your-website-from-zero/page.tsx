'use client'

import { TutorialLayout, H2, H3, P, Ul, Li, Table, Callout } from '@/components/TutorialLayout'

export default function LaunchYourWebsiteFromZero() {
  return (
    <TutorialLayout
      tag="建站 & 部署"
      tagColor="bg-emerald/10 text-emerald"
      readTime="20 min"
      date="2026-04-23"
      titleEn="Launch Your Personal / Company Website from Zero (China-Friendly)"
      titleZh="0到1上线你的个人/公司网站（国内友好）— 全年 ¥85 的现代建站方案"
    >
      <P>建站公司的报价从 ¥5000 到 ¥50000 不等，但做出来的站 2026 年还用 PHP + MySQL，打开要 5 秒，改个 banner 要提工单。<strong>这套教程教你自己搞定，全年成本 ¥85（就是一个域名的钱）</strong>。流程全部走一遍，含国内用户的支付宝支付、访问优化和备案替代方案。</P>

      <Callout>
        <P><strong>这套方案适合谁</strong></P>
        <P>✅ 个人作品集 / 公司官网 / 产品落地页 / 博客 / SaaS 主站 / 文档站</P>
        <P>❌ 需要工信部 ICP 备案的业务（文末给了替代方案）</P>
        <P>❌ 需要大文件上传 / 实时视频转码 / WebSocket 长连接的应用</P>
      </Callout>

      <H2>📦 最终架构（全图）</H2>

      <P>整套方案只有 4 个服务，其中 3 个对中小企业流量完全免费：</P>

      <Table
        headers={['层级', '服务', '年费', '作用']}
        rows={[
          ['域名', 'NameSilo', '¥70-90', '支付宝付款，免费 WHOIS 隐私'],
          ['DNS + 边缘安全', 'Cloudflare Free', '¥0', '免费 SSL、WAF、CDN'],
          ['代码托管', 'GitHub Free', '¥0', '无限公开仓库'],
          ['构建 + 部署', 'Vercel Hobby', '¥0', '100 GB/月带宽，全球边缘'],
          ['合计', '', '≈ ¥85', ''],
        ]}
      />

      <P>工作原理一句话：<strong>Git push 代码 → GitHub 通知 Vercel → 自动构建部署到全球边缘网络 → 用户通过 Cloudflare DNS 拿到最近节点的 IP</strong>。你永远不需要 SSH 进任何一台服务器。</P>

      <H2>⚙ 前置准备（10 分钟）</H2>

      <Ul>
        <Li><strong>Gmail / Outlook / ProtonMail 邮箱</strong>（国内企业邮箱收不到海外验证邮件，会卡在注册那步）</Li>
        <Li><strong>TOTP 二次验证 App</strong>：推荐 1Password / Authy / Ente Auth（域名账号被撞库 = 整个站被劫持）</Li>
        <Li><strong>Node.js ≥ 18, Git ≥ 2.30</strong>（Mac 用 brew，Windows 用 <a href="https://nodejs.org" target="_blank" rel="noopener">nodejs.org</a> 官网安装包）</Li>
        <Li><strong>支付宝或银联卡</strong>（买域名用；其他服务免费阶段不用付款）</Li>
        <Li><strong>科学上网</strong>（NameSilo / Vercel / Cloudflare 部分功能在国内需要代理）</Li>
      </Ul>

      <H2>🌐 第 1 步：NameSilo 注册域名（10 分钟，¥80 左右）</H2>

      <P>为什么不选别家：</P>
      <Ul>
        <Li>❌ <strong>GoDaddy</strong>：首年便宜，续费 3-5 倍价格 + WHOIS 隐私收费</Li>
        <Li>❌ <strong>阿里云国际</strong>：续费贵，账号体系割裂</Li>
        <Li>❌ <strong>Cloudflare Registrar</strong>：成本最低（批发价），但不支持支付宝 + 需要已有 Cloudflare 站点</Li>
        <Li>✅ <strong>NameSilo</strong>：首年和续费同价、WHOIS 隐私免费、支付宝直接付款</Li>
      </Ul>

      <H3>操作步骤</H3>
      <Ul>
        <Li>打开 <a href="https://www.namesilo.com" target="_blank" rel="noopener">namesilo.com</a> → <strong>Sign Up</strong></Li>
        <Li>注册完立刻 <strong>My Account → Two-Factor Auth</strong> 开启 2FA</Li>
        <Li>首页搜 <code>yourcompany.com</code>（建议 <code>.com</code> &lt; 15 字符，不要连字符/数字）</Li>
        <Li>Available 就加购物车 → Checkout</Li>
      </Ul>

      <H3>🚨 购物车必须改的 5 个配置</H3>
      <Table
        headers={['配置项', '改成什么', '为什么']}
        rows={[
          ['Privacy', 'WHOIS Privacy (免费)', '不然邮箱电话会被爬到 WHOIS，天天骚扰电话'],
          ['Auto-Renew', 'No', '手动续费更安全，到期前邮件提醒够用'],
          ['Domain Defender', 'No', '免费账号已含 Domain Lock，这是多余付费'],
          ['NameServers', '保持默认', '下一步换到 Cloudflare 再改'],
          ['Promo Code', '有就用', '中文社区常有 $1 减免码'],
        ]}
      />

      <P>Checkout 选 <strong>Alipay / UnionPay</strong>，扫码付款 ¥80 左右搞定。</P>

      <H3>验证拿到域名</H3>
      <P>进 <strong>Domain Manager</strong> 确认 4 项：Active 状态 / Locked=Yes / Privacy=Enabled / 到期日期是明年今天。</P>

      <H2>🛡 第 2 步：Cloudflare 接管 DNS（15 分钟）</H2>

      <P>为什么用 Cloudflare 而不是 NameSilo 自带 DNS：</P>
      <Ul>
        <Li>Cloudflare 200+ 边缘节点，响应快 3-10 倍</Li>
        <Li>免费 WAF + Bot 防护 + Rate Limit</Li>
        <Li>免费 Universal SSL 证书（和 Vercel 证书叠加）</Li>
        <Li>可选橙云代理 = DDoS 防护 + CDN 缓存</Li>
      </Ul>

      <H3>操作步骤</H3>
      <Ul>
        <Li>注册 <a href="https://dash.cloudflare.com" target="_blank" rel="noopener">dash.cloudflare.com</a> → 开 2FA</Li>
        <Li>右上角 <strong>Add a Site</strong> → 输入 <code>yourcompany.com</code>（不带 www，不带 https）</Li>
        <Li>选 <strong>Free 套餐</strong>（卡片在页面最下方白色背景，别误点 Pro）</Li>
        <Li>Cloudflare 显示 2 条 NS，类似 <code>amy.ns.cloudflare.com</code>，复制到记事本</Li>
      </Ul>

      <H3>回 NameSilo 改 Nameservers</H3>
      <Ul>
        <Li>NameSilo → <strong>Domain Manager</strong> → 勾选域名</Li>
        <Li>顶部找 "三根蓝色垂直柱" 图标（Change Nameservers）</Li>
        <Li>删除默认的 <code>ns1.dnsowl.com / ns2 / ns3</code></Li>
        <Li>填入 Cloudflare 给的 2 条 NS → Submit</Li>
      </Ul>

      <H3>验证 NS 生效（通常 5-30 分钟）</H3>
      <Callout>
        <P><code>{`# Mac / Linux`}</code></P>
        <P><code>dig NS yourcompany.com +short</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# Windows`}</code></P>
        <P><code>nslookup -type=ns yourcompany.com</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# 预期输出（返回 Cloudflare 的 NS 就算生效）`}</code></P>
        <P><code>{`# amy.ns.cloudflare.com.`}</code></P>
        <P><code>{`# tom.ns.cloudflare.com.`}</code></P>
      </Callout>

      <P>返回 Cloudflare 点 <strong>Check Nameservers</strong> → 状态变 Active。</P>

      <H3>🚨 SSL 模式必须选 Full (Strict)</H3>
      <P><strong>这是 90% 的人翻车的地方</strong>。Cloudflare → SSL/TLS → Overview：</P>

      <Table
        headers={['模式', '能用吗', '结果']}
        rows={[
          ['Off', '❌', 'HTTP 裸奔，不安全'],
          ['Flexible', '❌❌❌', '和 Vercel 配合会无限重定向 (TOO_MANY_REDIRECTS)'],
          ['Full', '⚠️ 可用', '证书不校验，有中间人风险'],
          ['Full (Strict)', '✅ 推荐', '端到端 HTTPS + 证书校验'],
        ]}
      />

      <H3>其他必开的 5 个开关</H3>
      <Ul>
        <Li><strong>SSL/TLS → Edge Certificates → Always Use HTTPS</strong>：ON</Li>
        <Li><strong>Automatic HTTPS Rewrites</strong>：ON（自动修复混合内容）</Li>
        <Li><strong>Speed → Brotli</strong>：ON（压缩提速）</Li>
        <Li><strong>Speed → Auto Minify</strong>：JS/CSS/HTML 全勾</Li>
        <Li><strong>Security → Bot Fight Mode</strong>：ON（免费反爬）</Li>
      </Ul>

      <P>⚠️ <strong>HSTS 暂时别开</strong>：一旦开启 6 个月内无法回退，等站稳定一个月再开。</P>

      <H2>📦 第 3 步：GitHub 选模板 + Fork（15 分钟）</H2>

      <P>不要自己从 0 写。从开源模板 Fork，改文案、改主题色、改 Logo 就完事了。选模板看 4 个指标：</P>

      <Ul>
        <Li>License 必须是 MIT / Apache-2.0 / BSD（见到 Creative Commons NC 跳过）</Li>
        <Li>Star ≥ 1000 + 近一年有 commit</Li>
        <Li>你熟悉的技术栈（只会 React 选 Next.js，不懂代码选 Astro）</Li>
        <Li>移动端响应式 + 无障碍 (a11y)</Li>
      </Ul>

      <H3>2026 年仍在活跃维护的推荐模板</H3>
      <Table
        headers={['模板', '技术栈', '适用场景', '仓库']}
        rows={[
          ['AstroWind', 'Astro 5 + Tailwind', '通用官网/博客/SaaS（首选）', 'onwidget/astrowind'],
          ['Astro Landing Page', 'Astro + Preline', '产品落地页', 'ACruzDiaz/astro_landing_page'],
          ['Next.js Commerce', 'Next.js 15', '电商官网', 'vercel/commerce'],
          ['Starter Blog', 'Next.js + MDX', '技术博客', 'timlrx/tailwind-nextjs-starter-blog'],
          ['Nextra', 'Next.js + MDX', '文档站', 'shuding/nextra'],
        ]}
      />

      <P><strong>首次建议 AstroWind</strong>：构建最快、SEO 默认优、上手门槛最低。进阶上 Next.js。</P>

      <H3>操作步骤</H3>
      <Callout>
        <P><code>{`# 1. 去 github.com 注册 + 开 2FA`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# 2. 配 SSH Key`}</code></P>
        <P><code>{`ssh-keygen -t ed25519 -C "your-email@example.com"`}</code></P>
        <P><code>{`cat ~/.ssh/id_ed25519.pub`}</code></P>
        <P><code>{`# 把输出粘到 GitHub → Settings → SSH and GPG keys`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# 3. 在模板仓库点 "Use this template" 按钮（不要 Fork）`}</code></P>
        <P><code>{`#    Use template 创建的仓库更干净，适合长期演化`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# 4. Clone 本地验证`}</code></P>
        <P><code>{`git clone git@github.com:YOUR_USERNAME/YOUR_REPO.git`}</code></P>
        <P><code>{`cd YOUR_REPO`}</code></P>
        <P><code>{`npm install`}</code></P>
        <P><code>{`npm run dev`}</code></P>
        <P><code>{`# 打开 http://localhost:4321 能看到页面 = OK`}</code></P>
      </Callout>

      <H3>改哪些文件最先见效</H3>
      <Ul>
        <Li><code>src/config.yaml</code> 或 <code>src/data/config.ts</code>：站点名、描述、URL</Li>
        <Li><code>src/content/pages/</code> 或 <code>src/pages/</code>：页面内容（Markdown）</Li>
        <Li><code>src/assets/</code> 或 <code>public/</code>：Logo、图片</Li>
        <Li><code>tailwind.config.mjs</code>：主题色</Li>
      </Ul>

      <H2>🚀 第 4 步：Vercel 一键部署（5 分钟）</H2>

      <Ul>
        <Li>打开 <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a> → <strong>Continue with GitHub</strong>（授权）</Li>
        <Li>右上角 <strong>Add New → Project</strong></Li>
        <Li>找到刚才的仓库 → <strong>Import</strong></Li>
        <Li>Framework 会自动识别，<strong>直接 Deploy</strong>（别改配置）</Li>
        <Li>等 1-2 分钟，看到烟花动画 = 成功</Li>
        <Li>拿到 <code>xxx.vercel.app</code> 的临时地址</Li>
      </Ul>

      <Callout>
        <P><strong>⚠️ Hobby 计划的商用条款</strong></P>
        <P>Vercel Hobby 技术上禁止商用。个人作品集、展示站、非营收官网目前执行较宽松。<strong>一旦开始收费/收款，请立刻升级 Pro ($20/月)</strong>，否则可能封号。</P>
      </Callout>

      <H3>首次部署必查的 5 项</H3>
      <Ul>
        <Li>浏览器访问临时链接，页面正常</Li>
        <Li>地址栏显示🔒（Let&apos;s Encrypt 自动签发）</Li>
        <Li>Chrome DevTools 切换移动端，所有按钮能点</Li>
        <Li>Lighthouse 跑一次，LCP &lt; 2.5s</Li>
        <Li>Console 没红色报错</Li>
      </Ul>

      <H2>🔗 第 5 步：绑定自定义域名（最容易翻车的一步）</H2>

      <H3>5.1 在 Vercel 添加域名</H3>
      <Ul>
        <Li>Vercel 项目 → <strong>Settings → Domains</strong></Li>
        <Li>输入 <code>yourcompany.com</code>（根域）→ Add</Li>
        <Li>同时添加 <code>www.yourcompany.com</code>，勾 <strong>Redirect www to apex</strong></Li>
        <Li>Vercel 会提示需要配的 DNS 记录</Li>
      </Ul>

      <H3>5.2 在 Cloudflare 加 DNS 记录</H3>
      <P><strong>apex 域名的坑</strong>：DNS 规范禁止 apex（根域）用 CNAME。解法两种：</P>

      <H3>✅ 方案 A：标准 A 记录（兼容性最好）</H3>
      <Table
        headers={['记录', '类型', '名称', '值', 'Proxy']}
        rows={[
          ['apex', 'A', '@', '76.76.21.21', 'DNS only (灰云)'],
          ['www', 'CNAME', 'www', 'cname.vercel-dns.com', 'DNS only (灰云)'],
        ]}
      />

      <H3>🎯 方案 B：Cloudflare CNAME Flattening（推荐）</H3>
      <Table
        headers={['记录', '类型', '名称', '值', 'Proxy']}
        rows={[
          ['apex', 'CNAME', '@', 'cname.vercel-dns.com', 'DNS only (灰云)'],
          ['www', 'CNAME', 'www', 'cname.vercel-dns.com', 'DNS only (灰云)'],
        ]}
      />

      <P><strong>推荐方案 B</strong>：Vercel 以后要换 IP，你什么都不用改。Cloudflare 自动处理 apex CNAME。</P>

      <H3>5.3 先灰云跑通，再切橙云</H3>
      <P>Cloudflare DNS 记录的橙色云/灰色云决定请求是否走 Cloudflare 边缘。<strong>首次建站一定先用灰云（DNS Only），不然证书签不下来</strong>。</P>

      <Callout>
        <P><strong>第一步：灰云走通</strong></P>
        <P>1. Cloudflare DNS 两条记录都保持 DNS Only（灰云）</P>
        <P>2. 等 1-5 分钟，Vercel Domains 变绿色 Valid Configuration</P>
        <P>3. 浏览器访问 https://yourcompany.com → 能正常显示 → 成功</P>
        <P>{``}</P>
        <P><strong>第二步（可选）：切橙云开启边缘能力</strong></P>
        <P>1. 确认 Cloudflare SSL/TLS 是 Full (Strict)</P>
        <P>2. 把两条 DNS 记录的 Proxy status 切 Proxied（橙云）</P>
        <P>3. 等 2 分钟，用 <code>curl -I</code> 验证（见下）</P>
      </Callout>

      <H3>5.4 验证命令合集</H3>
      <Callout>
        <P><code>{`# 1. NS 是否指向 Cloudflare`}</code></P>
        <P><code>{`dig NS yourcompany.com +short`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# 2. 域名解析到哪里`}</code></P>
        <P><code>{`dig yourcompany.com +short`}</code></P>
        <P><code>{`dig www.yourcompany.com +short`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# 3. HTTP 层验证（橙云下应看到 server: cloudflare）`}</code></P>
        <P><code>{`curl -I https://yourcompany.com`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# 4. 证书链验证`}</code></P>
        <P><code>{`openssl s_client -connect yourcompany.com:443 \\`}</code></P>
        <P><code>{`  -servername yourcompany.com < /dev/null 2>/dev/null \\`}</code></P>
        <P><code>{`  | openssl x509 -noout -issuer -dates`}</code></P>
      </Callout>

      <H2>🔄 第 6 步：持续交付工作流</H2>

      <P>域名绑定完，以后所有更新就是 <code>git push</code>。Vercel 约 60 秒内自动发布到全球边缘。</P>

      <H3>分支策略</H3>
      <Table
        headers={['分支', '用途', 'Vercel 行为']}
        rows={[
          ['main', '生产环境', '推送后自动部署到 yourcompany.com'],
          ['staging', '预发布', '自动生成 staging-xxx.vercel.app'],
          ['feature/*', '功能分支', '每个 PR 自动生成 Preview 链接'],
        ]}
      />

      <H3>常用命令</H3>
      <Callout>
        <P><code>{`# 开发新功能`}</code></P>
        <P><code>{`git checkout -b feature/update-hero`}</code></P>
        <P><code>{`# ... 修改文件 ...`}</code></P>
        <P><code>{`git add .`}</code></P>
        <P><code>{`git commit -m "feat: update hero"`}</code></P>
        <P><code>{`git push origin feature/update-hero`}</code></P>
        <P><code>{`# 在 GitHub 提 PR → Vercel 自动贴 Preview 链接`}</code></P>
        <P><code>{``}</code></P>
        <P><code>{`# 合并到 main`}</code></P>
        <P><code>{`git checkout main && git pull`}</code></P>
        <P><code>{`git merge feature/update-hero`}</code></P>
        <P><code>{`git push origin main`}</code></P>
        <P><code>{`# 约 60 秒后 yourcompany.com 自动更新`}</code></P>
      </Callout>

      <H3>出 bug 了怎么回滚</H3>
      <P>Vercel 面板 → <strong>Deployments</strong> → 找上一个正常版本 → <strong>Promote to Production</strong>。<strong>10 秒内生效</strong>，不用 git revert。</P>

      <H2>🇨🇳 国内访问优化（重要）</H2>

      <P>Vercel 默认回源走新加坡/美西，中国访客绕远路，首屏可能 3+ 秒。优化方向：</P>

      <Ul>
        <Li><strong>方案 1（推荐）</strong>：Cloudflare 切橙云，用 CF 的香港/台北节点做前置。国内大部分地区能快到 200-500ms</Li>
        <Li><strong>方案 2（高阶）</strong>：主站留 Vercel，核心静态资源（图片/视频）额外推到腾讯云 EdgeOne / 阿里云 DCDN</Li>
        <Li><strong>方案 3（极端）</strong>：做两套站 —— 海外用 Vercel，国内用 EdgeOne Pages / 腾讯云 CloudBase，DNS 按访客来源分流</Li>
      </Ul>

      <Callout>
        <P><strong>关于 ICP 备案</strong></P>
        <P>NameSilo 注册的域名 + Cloudflare/Vercel <strong>无法做工信部备案</strong>，因为服务器必须在中国大陆。</P>
        <P>现实选择：</P>
        <P>1. <strong>不备案</strong>：海外用户为主，国内 80%+ 地区能访问但做不了公安强实名业务</P>
        <P>2. <strong>双站并行</strong>：另外注册 <code>.cn</code> 域名 + 腾讯云/阿里云国内服务器 + 做备案，作为国内专属入口</P>
      </Callout>

      <H2>🔒 安全加固（上线后一定做）</H2>

      <H3>Cloudflare 侧</H3>
      <Table
        headers={['配置', '路径', '值']}
        rows={[
          ['WAF', 'Security → WAF → Managed Rules', '开启 Free Ruleset'],
          ['防爬', 'Security → Bots → Bot Fight Mode', 'ON'],
          ['限频', 'Security → WAF → Rate limiting rules', '登录/表单路径 30 req/min'],
          ['最低 TLS', 'SSL/TLS → Edge Certs → Minimum TLS', 'TLS 1.2'],
          ['HSTS', 'SSL/TLS → Edge Certs → HSTS', '稳定 1 个月后再开，max-age 初设 1 周'],
        ]}
      />

      <H3>Vercel 侧</H3>
      <Ul>
        <Li><strong>Vercel Firewall</strong>：免费层已开基础规则</Li>
        <Li><strong>Speed Insights</strong>：Analytics → Speed Insights，每月 10k 事件免费</Li>
        <Li><strong>Web Analytics</strong>：无 Cookie，GDPR 友好</Li>
      </Ul>

      <H3>源码加安全响应头</H3>
      <Callout>
        <P><code>{`// Next.js: next.config.js`}</code></P>
        <P><code>{`const securityHeaders = [`}</code></P>
        <P><code>{`  { key: 'X-Content-Type-Options', value: 'nosniff' },`}</code></P>
        <P><code>{`  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },`}</code></P>
        <P><code>{`  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },`}</code></P>
        <P><code>{`  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },`}</code></P>
        <P><code>{`]`}</code></P>
        <P><code>{`module.exports = {`}</code></P>
        <P><code>{`  async headers() {`}</code></P>
        <P><code>{`    return [{ source: '/(.*)', headers: securityHeaders }]`}</code></P>
        <P><code>{`  },`}</code></P>
        <P><code>{`}`}</code></P>
      </Callout>

      <H2>⚡ 性能达标基线</H2>

      <Table
        headers={['指标', '目标值', '工具']}
        rows={[
          ['LCP（最大内容绘制）', '≤ 2.5s', 'Lighthouse / PageSpeed'],
          ['INP（交互延迟）', '≤ 200ms', 'Chrome UX Report'],
          ['CLS（累积布局偏移）', '≤ 0.1', 'Lighthouse'],
          ['TTFB（首字节时间）', '≤ 600ms', 'WebPageTest'],
        ]}
      />

      <P>不达标就检查：图片是否用 AVIF/WebP、字体是否 preload、有没有未用的 JS 没摇掉。</P>

      <H2>🚨 7 个最常见故障排查</H2>

      <H3>Q1: 访问站点 ERR_TOO_MANY_REDIRECTS</H3>
      <P>Cloudflare SSL 模式是 Flexible。改成 <strong>Full (Strict)</strong>，清浏览器缓存即可。</P>

      <H3>Q2: Cloudflare 返回 525 / 526</H3>
      <Ul>
        <Li><strong>525</strong>：SSL 握手失败。先把 SSL 从 Full Strict 改 Full，能访问再切回 Strict</Li>
        <Li><strong>526</strong>：证书不受信任。Vercel 侧确认域名状态 Valid，证书已签发</Li>
        <Li>都不行 = 临时切灰云 (DNS Only)，让请求直接到 Vercel</Li>
      </Ul>

      <H3>Q3: Vercel 一直 &quot;Failed to Generate Cert&quot;</H3>
      <P>Cloudflare 橙云代理拦截了 Let&apos;s Encrypt 验证请求。<strong>临时切灰云</strong>，等 Vercel 签发成功（2-5 分钟），再切回橙云。</P>

      <H3>Q4: www 能访问，根域打不开</H3>
      <P>只配了 www 的 CNAME，忘了 apex。按 5.2 补上 apex 记录（推荐 CNAME Flattening）。</P>

      <H3>Q5: NS 24 小时还没生效</H3>
      <Callout>
        <P><code>{`dig NS yourcompany.com +short`}</code></P>
      </Callout>
      <Ul>
        <Li>返回 Cloudflare NS → 生效了，回 Cloudflare 点 Check</Li>
        <Li>返回 NameSilo 默认值 → NameSilo 没保存成功，重做</Li>
        <Li>返回第三方 NS → 之前在别家配过 DNS，那边去注销</Li>
      </Ul>

      <H3>Q6: 提交代码 Vercel 没部署</H3>
      <Ul>
        <Li>Vercel → Settings → Git：仓库和分支对不对</Li>
        <Li>GitHub 仓库 → Settings → Webhooks：Vercel 的 webhook delivery 有没有 200</Li>
        <Li>Vercel Deployments：是否有 failed 记录</Li>
      </Ul>

      <H3>Q7: 国内访问慢到 3+ 秒</H3>
      <P>见上文"国内访问优化"章节，首选切橙云用 Cloudflare 香港节点。</P>

      <H2>💰 升级路径（什么时候付钱）</H2>

      <Table
        headers={['触发条件', '升级到', '月费']}
        rows={[
          ['站点开始产生营收', 'Vercel Pro', '$20'],
          ['需要 2+ 人协作', 'Vercel Pro', '包含'],
          ['月带宽 > 100 GB', 'Vercel Pro', '含 1 TB'],
          ['需要 WAF 高级规则', 'Cloudflare Pro', '$25'],
          ['需要 ICP 备案', '腾讯云/阿里云国内版', '¥几千/年'],
        ]}
      />

      <P>绝大多数个人站 / 小公司官网，<strong>前 12 个月只需要 ¥85</strong>。</P>

      <H2>📝 如果非技术同事也要改文案（Headless CMS）</H2>

      <Table
        headers={['CMS', '特点', '价格']}
        rows={[
          ['Sanity', '最成熟，实时协作', '免费层够中小企业'],
          ['Notion', '用 Notion 当后台（配 notion-to-md）', '免费/$10'],
          ['Strapi', '开源自托管', '自托管免费'],
          ['Contentful', '企业级，生态广', '免费层有限'],
        ]}
      />

      <P>原理：构建时通过 Webhook 拉内容 → 生成静态页 → 部署。运行时仍然零后端。</P>

      <H2>✅ 上线前 Checklist</H2>

      <Callout>
        <P>□ 域名已开启 WHOIS Privacy、Domain Lock、2FA</P>
        <P>□ NS 已切到 Cloudflare 并验证生效（dig）</P>
        <P>□ Cloudflare SSL 是 Full (Strict)</P>
        <P>□ Always Use HTTPS、Brotli、Bot Fight Mode 都开</P>
        <P>□ GitHub 仓库创建，2FA 启用</P>
        <P>□ Vercel 部署成功，临时链接可访问</P>
        <P>□ 自定义域名显示 Valid Configuration</P>
        <P>□ apex + www 都能 HTTPS 访问</P>
        <P>□ Lighthouse ≥ 90 分</P>
        <P>□ 部署通知接入团队群（Slack / 飞书 / 钉钉）</P>
        <P>□ main 分支加保护规则（要 PR review）</P>
        <P>□ 4 个账号的恢复码都备份</P>
      </Callout>

      <H2>🎯 这套方案的真正价值</H2>

      <P>省钱只是表象。更深的 3 点：</P>
      <Ul>
        <Li><strong>能力主权</strong>：你的站不被任何一家建站公司锁死。换平台 = 改两条 DNS</Li>
        <Li><strong>可观测性</strong>：每次变更有 Git 记录、Preview 链接、一键回滚</Li>
        <Li><strong>复利效应</strong>：第二个、第三个站 20 分钟就能起</Li>
      </Ul>

      <P>一人公司时代的核心杠杆不是某个工具，是<strong>把复杂交付链路压成几条可执行的命令</strong>。你不用再和建站公司扯皮"周期能不能缩两周"，一条 <code>git push</code>，然后去做真正重要的事：把你的产品、公司、故事写进这个网站里。</P>

      <H2>📚 延伸阅读</H2>
      <Ul>
        <Li><a href="/tutorials/seo-from-zero-to-indexed" className="text-primary hover:underline">新站24小时被 Google/Bing/百度全收录</a> — 下一步让搜索引擎找到你</Li>
        <Li><a href="/nav" className="text-primary hover:underline">AI 工具导航</a> — 建站过程中用到的 AI 工具精选</Li>
        <Li><a href="https://github.com/onwidget/astrowind" target="_blank" rel="noopener" className="text-primary hover:underline">AstroWind 模板仓库</a> — 本文首推的 Astro 建站模板</Li>
      </Ul>

      <Callout>
        <P><strong>💬 建站过程中卡住找我</strong></P>
        <P>这套方案我给自己做的 onepersoncompany.one 就是这么起的，<strong>全程 40 分钟，年成本 ¥85</strong>。如果你做到哪一步卡住，加我微信 <strong>LIR--3point14</strong> 直接聊。比请建站公司便宜 100 倍。</P>
      </Callout>
    </TutorialLayout>
  )
}
