'use client'

import {useTranslations} from 'next-intl'
import {Link as I18nLink} from '@/i18n/routing'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useLocale } from 'next-intl'
import { ActivitySquare } from 'lucide-react'

export default function Navbar() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const locale = useLocale()
  
  // 从路径中移除语言前缀以获取实际路径
  const path = pathname.replace(`/${locale}`, '')
  
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <I18nLink href="/" aria-label="Manus AI" title="Manus AI" className="flex items-center">
              <img src="/logo.svg" alt="Manus AI" className="w-10 h-auto mr-1" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Manus AI</span>
            </I18nLink>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <I18nLink 
                href="/"
                aria-label={t('home')}
                title={t('home')}
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  path === '/'
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400"
                )}
              >
                {t('home')}
              </I18nLink>
              <Link 
                href="https://manus.im/usecases"
                aria-label={t('cases')}
                title={t('cases')}
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  path.startsWith('/cases')
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400"
                )}
              >
                {t('cases')}
              </Link>
              <I18nLink 
                href="/invite"
                aria-label={t('invite')}
                title={t('invite')}
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  path.startsWith('/cases')
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400"
                )}
              >
                {t('invite')}
              </I18nLink>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          
          {/* 移动端导航菜单 */}
          <div className="flex items-center sm:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
} 