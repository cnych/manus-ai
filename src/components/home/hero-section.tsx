'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointerClick, Code, Lightbulb, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const t = useTranslations('Index');

  // 动画变体
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const featureItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="mx-auto relative overflow-hidden bg-background py-16 md:pt-20 lg:pt-24">
      {/* 背景设计 */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute right-0 top-0 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 blur-3xl"></div>
        <div className="absolute left-0 top-96 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl"></div>
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              variants={item}
            >
              {t('hero.introducing')}
            </motion.p>
            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
              variants={item}
            >
              <span className="text-primary">Manus AI</span> - {t('hero.title')}
            </motion.h1>
            <motion.p
              className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground"
              variants={item}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              variants={item}
            >
              <Button size="lg" asChild>
                <Link href="https://manus.im" target="_blank" className="gap-2">
                  {t('hero.getStarted')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="bg-gradient-to-r from-primary to-purple-600 text-white" asChild>
                <Link href="/invite">
                  <Gift className="mr-2 h-4 w-4" />
                  {t('hero.invite')}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              variants={featureItem}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MousePointerClick className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium text-foreground">{t('overview.architecture.server.features.0.title')}</h3>
              <p className="text-muted-foreground">
                {t('overview.architecture.server.features.0.description')}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              variants={featureItem}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium text-foreground">{t('overview.architecture.server.features.1.title')}</h3>
              <p className="text-muted-foreground">
                {t('overview.architecture.server.features.1.description')}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md sm:col-span-2 lg:col-span-1"
              variants={featureItem}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium text-foreground">{t('overview.architecture.server.features.2.title')}</h3>
              <p className="text-muted-foreground">
                {t('overview.architecture.server.features.2.description')}
              </p>
            </motion.div>
          </motion.div>
          
          {/* 使用技巧部分 */}
          <motion.div
            className="mx-auto mt-16 max-w-5xl rounded-xl border border-primary/20 bg-primary/5 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-medium text-foreground">{t('hero.tips.title', {default: 'Manus AI Usage Tips'})}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card/50 p-4">
                <p className="font-medium text-foreground mb-1">{t('hero.tips.expression.title', {default: 'Manus AI Requirement Expression'})}</p>
                <p className="text-sm text-muted-foreground">
                  {t('hero.tips.expression.description', {default: 'The clearer and more specific your description of what Manus AI should deliver, the more precise Manus AI will execute. Clearly state expectations, format requirements, and quality standards.'})}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card/50 p-4">
                <p className="font-medium text-foreground mb-1">{t('hero.tips.breakdown.title', {default: 'Manus AI Task Breakdown'})}</p>
                <p className="text-sm text-muted-foreground">
                  {t('hero.tips.breakdown.description', {default: 'For complex tasks, use a progressive approach. Let Manus AI complete one part first, then provide further requirements based on intermediate results.'})}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card/50 p-4">
                <p className="font-medium text-foreground mb-1">{t('hero.tips.knowledge.title', {default: 'Manus AI Knowledge System'})}</p>
                <p className="text-sm text-muted-foreground">
                  {t('hero.tips.knowledge.description', {default: 'Add specific requirements and preferences to Manus AI, or when Manus AI completes a satisfactory operation, tell it to "remember this approach for next time."'})}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card/50 p-4">
                <p className="font-medium text-foreground mb-1">{t('hero.tips.correction.title', {default: 'Manus AI Timely Correction'})}</p>
                <p className="text-sm text-muted-foreground">
                  {t('hero.tips.correction.description', {default: 'When you notice Manus AI\'s execution direction deviating from expectations, intervene immediately with guidance rather than waiting until the task is complete. Manus AI will quickly adjust its strategy.'})}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 