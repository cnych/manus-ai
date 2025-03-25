'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Gift, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


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

export default function InviteClient() {
  const t = useTranslations('Index.protocol.inviteCode');
  const tAlt = useTranslations('Index.alternatives');

  const benefits = [
    {
      icon: <Gift className="h-6 w-6" />,
      title: t('benefits.priority.title'),
      description: t('benefits.priority.description')
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: t('benefits.support.title'),
      description: t('benefits.support.description')
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: t('benefits.influence.title'),
      description: t('benefits.influence.description')
    }
  ];

  const alternatives = [
    {
      name: 'TARS Agent',
      description: tAlt('items.tars.description'),
      url: 'https://agent-tars.com'
    },
    {
      name: 'OpenManus',
      description: tAlt('items.openmanus.description'),
      url: 'https://github.com/manusai/openmanus'
    },
    {
      name: 'OWL',
      description: tAlt('items.owl.description'),
      url: 'https://github.com/camel-ai/owl'
    }
  ];

  return (
    <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className="mx-auto max-w-7xl px-6 lg:px-8"
    >
    <motion.div variants={item} className="mx-auto max-w-2xl text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
        <Gift className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        {t('title')}
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
        {t('description')}
        </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* 左侧：引导区域 */}
        <motion.div variants={item} className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('guide.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('guide.description')}
            </p>
            <div className="flex flex-col space-y-4">
            <Button size="lg" className="w-full" asChild>
                <a href="https://discord.com/invite/gjuXBWaU" target="_blank" rel="noopener noreferrer">
                {t('guide.discordButton')}
                <ExternalLink className="ml-2 h-4 w-4" />
                </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="/">
                {t('guide.homeButton')}
                <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
            </div>
            </div>
        </div>

        {/* 替代品推荐 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              {tAlt('title')}
            </h3>
            <div className="space-y-6">
            {alternatives.map((alt, index) => (
                <a
                key={index}
                href={alt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    {alt.name}
                    <ExternalLink className="ml-2 h-4 w-4 text-gray-400" />
                </h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {alt.description}
                </p>
                </a>
            ))}
            </div>
        </div>
        </motion.div>
        
        {/* 右侧：邀请码权益 */}
        <motion.div variants={item} className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            {t('benefitsSection.title')}
            </h3>
            <div className="space-y-6">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {benefit.icon}
                </div>
                <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                    {benefit.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
            {t('closedBeta.title')}
            </h3>
            <p className="mb-4 text-white/90">
            {t('closedBeta.description')}
            </p>
            <div className="flex items-center gap-2 text-sm">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span>{t('limitedSpots')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span>{t('exclusiveAccess')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span>{t('prioritySupport')}</span>
            </div>
        </div>
        </motion.div>
    </div>
    </motion.div>
  );
} 