'use client'

import { TutorialLayout, H2, H3, P, Ul, Li, Table, Callout } from '@/components/TutorialLayout'

export default function SideProjectToFulltime() {
  return (
    <TutorialLayout
      tag="Career"
      tagColor="bg-red-500/10 text-red-500"
      readTime="11 min"
      date="2026-04-18"
      titleEn="Side Project to Full-Time Solopreneur: A Safe Transition Roadmap"
      titleZh="从副业到全职独立开发者：不辞职也能创业的安全过渡路线图"
    >
      <P>27%的美国成年人有副业，平均月入$885。但从副业到全职的跳跃是最危险的阶段。本教程基于成功转型案例，提供一个分阶段的安全过渡框架。</P>

      <H2>Phase 0：心态准备</H2>
      <Callout>
        <P><strong>不要因为&quot;讨厌工作&quot;而辞职，要因为&quot;副业准备好了&quot;</strong></P>
        <P>Pieter Levels失败了70+个项目才成功——失败是过程的一部分。</P>
      </Callout>
      <H3>关键心态转变</H3>
      <Ul>
        <Li>从&quot;我需要一个完美想法&quot; → &quot;我需要快速验证很多想法&quot;</Li>
        <Li>从&quot;等产品完美了再发布&quot; → &quot;先发布，再迭代&quot;</Li>
        <Li>从&quot;我需要融资&quot; → &quot;我需要付费用户&quot;</Li>
      </Ul>

      <H2>Phase 1：验证期（0-3个月，工作之余）</H2>
      <P>每天投入1-2小时，早起或晚上。</P>
      <Ul>
        <Li>列出你每天/每周重复做的烦人任务</Li>
        <Li>观察你所在行业的痛点</Li>
        <Li>在Twitter/Reddit验证想法</Li>
        <Li>做Landing Page测试需求</Li>
      </Ul>
      <P><strong>里程碑</strong>：收到第一笔钱（哪怕$1）</P>

      <H2>Phase 2：建设期（3-6个月，工作之余）</H2>
      <P>每天投入2-3小时。</P>
      <Ul>
        <Li>用AI工具加速开发（Cursor + Claude Code）</Li>
        <Li>发布到Product Hunt / Indie Hackers</Li>
        <Li>开始Building in Public</Li>
      </Ul>
      <P><strong>里程碑</strong>：MRR达到$500-1000</P>

      <H2>Phase 3：增长期（6-12个月，工作之余）</H2>
      <Ul>
        <Li>优化产品基于用户反馈</Li>
        <Li>建立内容营销飞轮</Li>
        <Li>开始建立邮件列表和社区</Li>
      </Ul>
      <P><strong>里程碑</strong>：MRR达到月薪的50%，连续3个月稳定</P>

      <H2>何时辞职？决策框架</H2>
      <Table
        headers={['条件', '最低要求', '理想状态']}
        rows={[
          ['月收入', '≥ 月薪的50%', '≥ 月薪的80%'],
          ['收入稳定性', '连续3个月', '连续6个月'],
          ['储蓄', '6个月生活费', '12个月生活费'],
          ['增长趋势', '持平或增长', '月增>10%'],
          ['用户反馈', '正面为主', '有回头客'],
        ]}
      />
      <Callout>
        <P><strong>不要辞职如果：</strong>收入不稳定或在下降 / 没有储蓄缓冲 / 只是因为讨厌工作 / 产品只有一个大客户</P>
      </Callout>

      <H2>辞职后的关键动作</H2>
      <Ul>
        <Li><strong>前3个月</strong>：全力增长，不急于招人</Li>
        <Li>设定清晰的3/6/12月目标</Li>
        <Li>建立每日routine——独立工作最大的敌人是缺乏结构</Li>
        <Li>加入独立开发者社群防止孤独感</Li>
        <Li>定期锻炼和社交——身心健康是最重要的资产</Li>
      </Ul>

      <H2>财务与法律准备</H2>
      <Ul>
        <Li>提前成立公司（LLC/有限责任公司）</Li>
        <Li>开设企业银行账户，个人和企业财务分离</Li>
        <Li>了解税务义务（季度预缴税）</Li>
        <Li>考虑注册美国LLC（Stripe Atlas / Firstbase.io）</Li>
        <Li>买好健康保险</Li>
      </Ul>

      <H2>推荐资源</H2>
      <Table
        headers={['类别', '资源', '说明']}
        rows={[
          ['社区', 'Indie Hackers', '独立开发者社区'],
          ['社区', '即刻App', '中文独立开发者社区'],
          ['播客', 'My First Million', '商业灵感'],
          ['书籍', '《Company of One》', '一人公司经典'],
          ['书籍', '《The Minimalist Entrepreneur》', 'Sahil Lavingia著'],
          ['注册公司', 'Stripe Atlas', '$500一站式注册美国公司'],
          ['财务', 'Mercury', '创业者银行'],
        ]}
      />
    </TutorialLayout>
  )
}
