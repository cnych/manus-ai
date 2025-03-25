'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Check, X } from 'lucide-react';
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

interface Alternative {
  name: string;
  description: string;
  url: string;
  features: {
    toolCalling: boolean;
    independentWork: boolean;
    humanLikeInteraction: boolean;
  };
  pros: string[];
}

export function AlternativeSection() {
  const t = useTranslations('Index.alternatives');

  const alternatives: Alternative[] = [
    {
      name: 'TARS Agent',
      description: t('items.tars.description'),
      url: "https://agent-tars.com",
      features: {
        toolCalling: true,
        independentWork: true,
        humanLikeInteraction: true,
      },
      pros: [
        t('items.tars.pros.workflow'),
        t('items.tars.pros.tools'),
        t('items.tars.pros.artifacts')
      ],
    },
    {
      name: 'OpenManus',
      description: t('items.openmanus.description'),
      url: "https://github.com/manusai/openmanus",
      features: {
        toolCalling: true,
        independentWork: true,
        humanLikeInteraction: true,
      },
      pros: [
        t('items.openmanus.pros.opensource'),
        t('items.openmanus.pros.flexible'),
        t('items.openmanus.pros.integration')
      ],
    },
    {
      name: 'OWL',
      description: t('items.owl.description'),
      url: "https://github.com/camel-ai/owl",
      features: {
        toolCalling: true,
        independentWork: true,
        humanLikeInteraction: true,
      },
      pros: [
        t('items.owl.pros.benchmark'),
        t('items.owl.pros.toolkits'),
        t('items.owl.pros.models')
      ],
    },
  ];

  return (
    <motion.section 
      className="pt-20 bg-card/30 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('description')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {alternatives.map((alt) => (
            <motion.div 
              key={alt.name}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
              variants={item}
            >
            <Link href={alt.url} target="_blank">
              <h3 className="text-xl font-semibold mb-2">{alt.name}</h3>
              <p className="text-muted-foreground mb-4">{alt.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('features.toolCalling')}</span>
                  {alt.features.toolCalling ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('features.independentWork')}</span>
                  {alt.features.independentWork ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('features.humanLikeInteraction')}</span>
                  {alt.features.humanLikeInteraction ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">{t('pros.title')}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {alt.pros.map((pro, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 