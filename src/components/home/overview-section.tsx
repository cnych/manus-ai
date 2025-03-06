'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Brain, Workflow, Zap, Check, X } from 'lucide-react';
import { ReactNode } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function OverviewSection() {
  const t = useTranslations('Index');

  const featureIcons: Record<string, ReactNode> = {
    spec: <Brain className="h-5 w-5 text-primary" />,
    desktop: <Workflow className="h-5 w-5 text-primary" />,
    servers: <Zap className="h-5 w-5 text-primary" />
  };

  // 安全获取组件值的辅助函数
  const getComponentValue = (key: string): string => {
    const components = t.raw('overview.components');
    if (typeof components === 'object' && components !== null && key in components) {
      const value = (components as Record<string, unknown>)[key];
      return typeof value === 'string' ? value : '';
    }
    return '';
  };

  return (
    <motion.section 
      className="py-20 bg-card/30 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-0 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-primary/30 to-purple-500/30 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-500/30 to-primary/30 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('overview.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('overview.description1')}
          </motion.p>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('overview.description2')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {['spec', 'desktop', 'servers'].map((key) => (
            <motion.div 
              key={key}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
              variants={item}
            >
              <div className="mb-4">
                {featureIcons[key]}
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                Manus AI {getComponentValue(key)}
              </h3>
              <p className="text-muted-foreground">
                {t(`overview.architecture.server.features.${key === 'spec' ? 0 : key === 'desktop' ? 1 : 2}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 与传统聊天机器人的区别 */}
        <div className="mx-auto max-w-4xl my-20">
          <motion.h3
            className="text-2xl font-bold text-center text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('overview.architecture.server.title')}
          </motion.h3>

          <motion.div
            className="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-3 text-center font-medium bg-muted/50 p-4 border-b border-border">
              <div>{t('overview.architecture.server.primitives.headers.0')}</div>
              <div>{t('overview.architecture.server.primitives.headers.1')}</div>
              <div className="text-primary">{t('overview.architecture.server.primitives.headers.2')}</div>
            </div>
            
            {/* 工具调用能力 */}
            <div className="grid grid-cols-3 border-b border-border">
              <div className="p-4 border-r border-border font-medium">
                {t('overview.architecture.server.primitives.items.0.primitive')}
              </div>
              <div className="p-4 border-r border-border text-muted-foreground flex flex-col items-center justify-center">
                <X className="h-5 w-5 text-red-500 mb-2" />
                {t('overview.architecture.server.primitives.items.0.control')}
              </div>
              <div className="p-4 text-muted-foreground flex flex-col items-center justify-center">
                <Check className="h-5 w-5 text-green-500 mb-2" />
                {t('overview.architecture.server.primitives.items.0.description')}
              </div>
            </div>
            
            {/* 工作方式 */}
            <div className="grid grid-cols-3 border-b border-border">
              <div className="p-4 border-r border-border font-medium">
                {t('overview.architecture.server.primitives.items.1.primitive')}
              </div>
              <div className="p-4 border-r border-border text-muted-foreground flex flex-col items-center justify-center">
                <X className="h-5 w-5 text-red-500 mb-2" />
                {t('overview.architecture.server.primitives.items.1.control')}
              </div>
              <div className="p-4 text-muted-foreground flex flex-col items-center justify-center">
                <Check className="h-5 w-5 text-green-500 mb-2" />
                {t('overview.architecture.server.primitives.items.1.description')}
              </div>
            </div>
            
            {/* 交互方式 */}
            <div className="grid grid-cols-3">
              <div className="p-4 border-r border-border font-medium">
                {t('overview.architecture.server.primitives.items.2.primitive')}
              </div>
              <div className="p-4 border-r border-border text-muted-foreground flex flex-col items-center justify-center">
                <X className="h-5 w-5 text-red-500 mb-2" />
                {t('overview.architecture.server.primitives.items.2.control')}
              </div>
              <div className="p-4 text-muted-foreground flex flex-col items-center justify-center">
                <Check className="h-5 w-5 text-green-500 mb-2" />
                {t('overview.architecture.server.primitives.items.2.description')}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
} 