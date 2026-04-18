'use client'

import { TutorialLayout, H2, H3, P, Ul, Li, Table, Callout } from '@/components/TutorialLayout'

export default function SoloSaaSPlaybook() {
  return (
    <TutorialLayout
      tag="SaaS"
      tagColor="bg-primary/10 text-primary"
      readTime="15 min"
      date="2026-04-18"
      titleEn="Solo SaaS Playbook: Validate, Build, and Get Your First 100 Users"
      titleZh="独立开发者SaaS从0到1：验证想法、构建产品、获取前100个用户"
    >
      <P>Marc Lou发布了21个产品，ShipFast达到$21K MRR。Tony Dinh的多个SaaS产品组合年收入超$50万。本教程基于这些成功案例，提炼出可复制的从0到1启动框架。</P>

      <H2>1. 想法验证（第1-2周）</H2>
      <Callout>
        <P><strong>核心原则：先验证需求再写代码</strong></P>
        <P>❌ 不要花3个月做一个没人要的产品。✅ 快速验证，100个邮件注册 = 有效需求信号。</P>
      </Callout>
      <Ul>
        <Li>在Twitter/X发布解决方案概念，看互动量</Li>
        <Li>在Reddit/Indie Hackers发帖询问痛点</Li>
        <Li>创建Landing Page + 邮件等待列表，衡量注册率</Li>
      </Ul>

      <H2>2. 找到&quot;可重复痛点&quot;</H2>
      <P>Marc Lou的核心理念：<strong>解决开发者讨厌重复做的事</strong>。ShipFast诞生于他厌倦了每个SaaS都要重复搭建auth/支付/邮件系统。</P>
      <H3>好的SaaS想法特征</H3>
      <Ul>
        <Li>解决具体、可量化的痛点</Li>
        <Li>目标用户愿意为其付费</Li>
        <Li>你自己就是目标用户（Dog-fooding）</Li>
        <Li>市场足够大但竞对不密集</Li>
      </Ul>

      <H2>3. MVP开发（第3-4周）</H2>
      <Ul>
        <Li><strong>核心功能only</strong>：砍掉80%你想做的功能</Li>
        <Li>使用Boilerplate加速：ShipFast ($199-299) 或开源替代</Li>
        <Li>预置功能：Google OAuth, Stripe支付, SEO, 邮件系统，节省20+小时</Li>
        <Li><strong>技术决策原则</strong>：选你最熟的，不追新</Li>
      </Ul>

      <H2>4. 定价策略</H2>
      <Ul>
        <Li>起步推荐一次性付费（降低用户决策门槛）</Li>
        <Li>Marc Lou的ShipFast采用一次性$199-299</Li>
        <Li>后期可转为订阅制增加MRR</Li>
        <Li><strong>关键：Day 1就收费，免费用户≠真实验证</strong></Li>
      </Ul>

      <H2>5. 发布与获客</H2>
      <Ul>
        <Li><strong>Product Hunt发布</strong>：ShipFast获得Product of the Day #2</Li>
        <Li><strong>Twitter/X Building in Public</strong>：分享开发过程、收入数据</Li>
        <Li><strong>社区营销</strong>：Indie Hackers, Reddit, Hacker News</Li>
        <Li><strong>SEO长尾</strong>：针对&quot;XXX alternative&quot;等关键词</Li>
      </Ul>

      <H2>6. 成功案例收入参考</H2>
      <Table
        headers={['创业者', '产品', '月收入', '模式']}
        rows={[
          ['Pieter Levels', 'Photo AI', '$105-138K', '订阅'],
          ['Pieter Levels', 'Nomad List', '$25-38K', '订阅'],
          ['Marc Lou', 'ShipFast', '$21K MRR', '一次性'],
          ['Tony Dinh', '产品组合', '~$40K', '混合'],
          ['Danny Postma', 'HeadshotPro', '$80K+', '订阅'],
        ]}
      />

      <H2>7. 推荐工具</H2>
      <Table
        headers={['阶段', '工具', '用途']}
        rows={[
          ['验证', 'Carrd / Framer', '快速Landing Page'],
          ['开发', 'ShipFast / Shipixen', 'SaaS Boilerplate'],
          ['支付', 'Stripe / Lemon Squeezy', '收款'],
          ['分析', 'PostHog / Plausible', '用户行为分析'],
          ['发布', 'Product Hunt', '首发渠道'],
          ['社区', 'Discord / Telegram', '用户社区'],
        ]}
      />
    </TutorialLayout>
  )
}
