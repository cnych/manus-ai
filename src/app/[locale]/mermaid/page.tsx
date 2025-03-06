'use client';

import { Mermaid } from '@/components/ui/mermaid';
import { useTranslations } from 'next-intl';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function MermaidPage() {
  const t = useTranslations('Index');
  
  const websiteFlowchart = `
  flowchart TD
    A[首页] --> B[Hero 部分]
    A --> C[概览部分]
    A --> D[产品状态部分]
    A --> E[特色案例部分]
    A --> F[Footer部分]
    
    B --> B1[Manus介绍]
    B --> B2[核心特点展示]
    B --> B3[使用技巧]
    B --> B4[快速入门按钮]
    
    C --> C1[Manus特点]
    C --> C2[与传统聊天机器人对比]
    C --> C3[支持的环境和工具]
    
    D --> D1[产品特性]
    D --> D2[发布路线图]
    D --> D3[Beta测试申请]
    
    E --> E1[数据分析]
    E --> E2[代码开发]
    E --> E3[内容创作]
    E --> E4[研究调研]
    E --> E5[旅行规划]
    E --> E6[文档处理]
    
    F --> F1[版权信息]
    F --> F2[链接导航]
    F --> F3[社交媒体]
    
    click A "#" "返回首页"
    click B4 "/docs" "前往文档"
    click D3 "/products" "申请Beta测试"
    click E "/cases" "查看更多案例"
  `;

  const architectureChart = `
  flowchart LR
    A[用户] --> B[提出任务需求]
    B --> C{Manus AI}
    C --> D[理解任务需求]
    D --> E[制定执行计划]
    E --> F[选择合适工具]
    F --> G[自主执行任务]
    G --> H[验证执行结果]
    H --> I[输出完整结果]
    I --> A
    
    subgraph 虚拟环境
    D
    E
    F
    G
    H
    I
    end
    
    style C fill:#f9f,stroke:#333,stroke-width:2px
    style 虚拟环境 fill:#f5f5f5,stroke:#ddd,stroke-width:1px
  `;

  const comparisonChart = `
  flowchart LR
    subgraph Manus工作模式
    A[用户请求] --> B[Manus自主分析]
    B --> C[制定执行计划]
    C --> D[自动执行任务]
    D --> E[结果交付]
    E --> F[用户验收]
    end
    
    subgraph 聊天机器人工作模式
    G[用户请求] --> H[机器人分析]
    H --> I[提供建议]
    I --> J[用户执行]
    J --> K[人工验证]
    K --> L[完成任务]
    end
    
    style Manus工作模式 fill:#e1f5fe,stroke:#81d4fa,stroke-width:1px
    style 聊天机器人工作模式 fill:#ffebee,stroke:#ffcdd2,stroke-width:1px
  `;

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/" className="flex items-center text-primary hover:underline">
          <ChevronLeft className="h-4 w-4 mr-1" />
          返回首页
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">Manus AI 网站结构与工作流程</h1>
      
      <div className="space-y-16">
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">网站结构流程图</h2>
          <p className="text-muted-foreground mb-6">
            下面的流程图展示了Manus AI网站的主要组成部分和导航结构。
          </p>
          <div className="p-4 bg-card rounded-lg">
            <Mermaid chart={websiteFlowchart} />
          </div>
        </div>
        
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Manus AI 工作原理</h2>
          <p className="text-muted-foreground mb-6">
            此图展示了Manus AI如何在虚拟环境中自主工作，从理解用户需求到交付完整结果的整个流程。
          </p>
          <div className="p-4 bg-card rounded-lg">
            <Mermaid chart={architectureChart} />
          </div>
        </div>
        
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Manus AI vs 传统聊天机器人</h2>
          <p className="text-muted-foreground mb-6">
            此图对比了Manus AI与传统聊天机器人在任务处理流程上的核心区别。
          </p>
          <div className="p-4 bg-card rounded-lg">
            <Mermaid chart={comparisonChart} />
          </div>
        </div>
      </div>
    </div>
  );
} 