'use client'

import { TutorialLayout, H2, H3, P, Ul, Li, Table, Callout, CodeBlock } from '@/components/TutorialLayout'

export default function BuildingInPublic() {
  return (
    <TutorialLayout
      tag="Marketing"
      tagColor="bg-accent/10 text-accent"
      readTime="13 min"
      date="2026-04-18"
      titleEn="Building in Public + Content Marketing Complete Guide"
      titleZh="一人公司的增长引擎：Building in Public + 内容营销完全指南"
    >
      <P>Marc Lou凭借Twitter/X上135,000+粉丝和&quot;Just Ship It&quot; Newsletter的20,000+订阅者，几乎零广告成本推动ShipFast月访问量达到120K。Building in Public不仅是营销策略，更是独立开发者最强大的护城河。</P>

      <H2>1. Building in Public核心框架</H2>
      <H3>透明度三层</H3>
      <Ul>
        <Li><strong>Level 1</strong>：分享你在做什么（功能更新、Bug修复）</Li>
        <Li><strong>Level 2</strong>：分享数据（收入、用户数、失败）</Li>
        <Li><strong>Level 3</strong>：分享思考过程（为什么做这个决定、学到了什么）</Li>
      </Ul>
      <Callout>
        <P>Pieter Levels公开所有产品收入数据，这种透明度本身就是最强的社交证明。Marc Lou分享每一次失败和成功。</P>
      </Callout>

      <H2>2. Twitter/X 运营策略</H2>
      <H3>内容分类比例</H3>
      <Ul>
        <Li>40% 产品进展/技术分享（带截图/视频）</Li>
        <Li>30% 个人故事/失败经验/收入数据</Li>
        <Li>20% 行业观点/趋势评论</Li>
        <Li>10% 互动/回复/转发</Li>
      </Ul>
      <H3>增长技巧</H3>
      <Ul>
        <Li>回复大V的帖子，提供有价值的见解</Li>
        <Li>发布截图/视频，比纯文字互动率高3-5x</Li>
        <Li>分享收入截图（MRR更新、Stripe截图）引发好奇心</Li>
        <Li>使用Thread长帖分享深度内容</Li>
        <Li>每天1-3条，保持一致性</Li>
      </Ul>

      <H2>3. Newsletter 策略</H2>
      <Ul>
        <Li><strong>推荐平台</strong>：Beehiiv（免费开始）或 Substack</Li>
        <Li>每周一封：本周做了什么、学到了什么、下周计划、一个实用技巧</Li>
        <Li>Marc Lou的&quot;Just Ship It&quot;增长到20,000+订阅者</Li>
        <Li><strong>变现路径</strong>：广告赞助、付费订阅、推广自己的产品</Li>
      </Ul>

      <H2>4. 博客/SEO 长线策略</H2>
      <Ul>
        <Li>写&quot;How I built X&quot;类文章，自带搜索流量</Li>
        <Li>针对&quot;best X alternative&quot;、&quot;X vs Y&quot;等对比关键词</Li>
        <Li>每篇文章都链回你的产品</Li>
        <Li>Marc Lou的ShipFast约40%流量来自自然搜索</Li>
      </Ul>

      <H2>5. 内容复用系统</H2>
      <CodeBlock>{`一篇深度博客
  ├── 拆成5-10条Twitter/X帖子
  ├── 转成Newsletter的一个板块
  ├── 录成5分钟YouTube视频
  ├── 发到Reddit/Indie Hackers
  └── 翻译成中文发到即刻/少数派/V2EX`}</CodeBlock>

      <H2>6. 核心社区</H2>
      <Table
        headers={['社区', '用途', '语言']}
        rows={[
          ['Indie Hackers', '发布产品、分享收入报告', '英文'],
          ['Hacker News', 'Show HN发布、技术讨论', '英文'],
          ['Product Hunt', '产品首发必选', '英文'],
          ['Reddit (r/SaaS)', 'SaaS讨论和推广', '英文'],
          ['即刻', '中文独立开发者社区', '中文'],
          ['少数派', '高质量产品评测', '中文'],
          ['V2EX', '技术社区，产品发布', '中文'],
        ]}
      />

      <H2>7. 推荐工具</H2>
      <Table
        headers={['用途', '工具', '费用']}
        rows={[
          ['Twitter管理', 'Typefully / Buffer', '$0-15/月'],
          ['Newsletter', 'Beehiiv / Substack', '免费开始'],
          ['博客', 'Astro + MDX / Ghost', '免费-$9/月'],
          ['SEO分析', 'Ahrefs Lite', '$29/月'],
          ['写作助手', 'Claude / ChatGPT', '$20/月'],
        ]}
      />
    </TutorialLayout>
  )
}
