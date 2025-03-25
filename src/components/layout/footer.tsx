'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    // {
    //   title: t('products'),
    //   links: [
    //     { label: t('links.agent'), href: '/products/agent' },
    //     { label: t('links.platform'), href: '/products/platform' },
    //     { label: t('links.enterprise'), href: '/products/enterprise' },
    //   ],
    // },
    {
      title: t('resources'),
      links: [
        { label: "Claude MCP", href: 'https://www.claudemcp.com' },
        { label: "ToMarkdown", href: 'https://www.tomarkdown.org' },
      ],
    },
    // {
    //   title: t('company'),
    //   links: [
    //     { label: t('links.about'), href: '/about' },
    //     { label: t('links.blog'), href: '/blog' },
    //     { label: t('links.careers'), href: '/careers' },
    //   ],
    // },
    // {
    //   title: t('legal'),
    //   links: [
    //     { label: t('links.privacy'), href: '/privacy' },
    //     { label: t('links.terms'), href: '/terms' },
    //     { label: t('links.security'), href: '/security' },
    //   ],
    // },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold gradient-text">Manus AI</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('description')}
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-medium text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Manus AI. {t('rights')}
          </p>
          <div className="flex space-x-4">
            <Button variant="link" size="sm" asChild>
              <Link href="/privacy">{t('links.privacy')}</Link>
            </Button>
            <Button variant="link" size="sm" asChild>
              <Link href="/terms">{t('links.terms')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
} 