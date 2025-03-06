'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, ShieldCheck, Clock, Sparkles, Calendar, Users, Gift, Mail } from 'lucide-react';
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

export function ProtocolSection() {
  const t = useTranslations('Index.protocol');

  const productFeatures = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "安全可靠",
      description: "采用先进安全架构，确保所有操作在隔离环境中执行，保护您的数据隐私",
      color: 'from-blue-500/10 to-blue-500/30 text-blue-500',
      shadowColor: 'shadow-blue-500/20',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "自动化效率",
      description: "自动完成耗时的任务，释放您的时间专注于更具创造性和战略性的工作",
      color: 'from-purple-500/10 to-purple-500/30 text-purple-500',
      shadowColor: 'shadow-purple-500/20',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "持续迭代",
      description: "定期更新功能和工具集，不断提升Agent能力以满足更多复杂场景需求",
      color: 'from-green-500/10 to-green-500/30 text-green-500',
      shadowColor: 'shadow-green-500/20',
    },
  ];

  const timelineItems = [
    {
      icon: <Calendar className="h-5 w-5" />,
      date: "2023年Q4",
      title: "内部Alpha测试",
      description: "完成核心引擎架构设计和基础功能开发",
      color: 'bg-gradient-to-br from-blue-500 to-purple-500',
      status: "已完成"
    },
    {
      icon: <Users className="h-5 w-5" />,
      date: "2024年Q1",
      title: "邀请制封闭Beta",
      description: "向有限用户开放Beta版本，优化稳定性和用户体验",
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      status: "当前阶段"
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      date: "2024年Q2",
      title: "公测版本",
      description: "对更广泛的用户开放，添加更多垂直领域的专业能力",
      color: 'bg-gradient-to-br from-pink-500 to-red-500', 
      status: "即将到来"
    },
  ];

  return (
    <section id="product-status" className="overflow-hidden bg-gray-50 dark:bg-gray-900/50 py-24 sm:py-32">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div variants={item} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            产品发布状态
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Manus AI 目前处于封闭Beta测试阶段，仅向受邀用户开放。我们正在快速迭代，不断改进产品体验。
          </p>
        </motion.div>

        <motion.div 
          variants={item} 
          className="mx-auto mt-10 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-purple-600 p-1">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
            <div className="relative rounded-lg bg-white/5 backdrop-blur-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
                  <Gift className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {t('inviteCode.title')}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {t('inviteCode.description')}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      <span className="text-sm text-white/90">{t('inviteCode.limitedSpots')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      <span className="text-sm text-white/90">{t('inviteCode.exclusiveAccess')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      <span className="text-sm text-white/90">{t('inviteCode.prioritySupport')}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                    <Link href="/invite">
                      <Mail className="mr-2 h-4 w-4" />
                      {t('inviteCode.buttonText')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* 左侧：产品特性 */}
            <div className="space-y-8">
              {productFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative"
                >
                  <div className={`absolute -inset-2 rounded-lg bg-gradient-to-r ${feature.color} opacity-10 blur-lg`} />
                  <div className={`relative rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg ${feature.shadowColor} hover:shadow-xl transition-shadow`}>
                    <div className="flex items-center gap-4">
                      <div className={`rounded-lg bg-gradient-to-br ${feature.color} p-2`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 右侧：发布时间线 */}
            <motion.div variants={item} className="lg:pl-8 space-y-6">
              <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                  发布路线图
                </h3>
                <div className="space-y-8">
                  {timelineItems.map((item, index) => (
                    <div key={index} className="relative">
                      {/* 连接线 */}
                      {index < timelineItems.length - 1 && (
                        <div className="absolute left-5 top-10 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                      )}
                      
                      <div className="flex items-start gap-4">
                        <div className={`h-10 w-10 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 z-10`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              {item.date}
                            </span>
                            {item.status === "当前阶段" && (
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                {item.status}
                              </span>
                            )}
                          </div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mt-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild className="w-full">
                    <Link href="/invite">
                      申请Beta测试资格
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}