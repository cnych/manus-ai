import {createNavigation} from 'next-intl/navigation'
import {defineRouting} from 'next-intl/routing'
import {locales, defaultLocale} from '@/i18n/config'

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames: {
    '/': '/',
    '/invite': '/invite',
    '/docs': '/docs',
    '/docs/[slug]': '/docs/[slug]',
    '/blog': '/blog',
    '/specification': '/specification',
    '/community': '/community',
    '/servers': '/servers',
    '/servers/[id]': '/servers/[id]',
    '/products': '/products',
    '/cases': '/cases',
    '/about': '/about',
    '/mermaid': '/mermaid'
  },
  localePrefix: 'as-needed'
})

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing)