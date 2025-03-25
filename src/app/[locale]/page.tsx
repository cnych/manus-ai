import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/hero-section';
import { OverviewSection } from '@/components/home/overview-section';
import { FeaturedServers } from '@/components/home/featured-servers';

  type PageProps = {  
      params: Promise<{ locale: string }>;
    }

  export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const {locale} = await params;
    const t = await getTranslations('Index');
    
    return {
      title: t('meta.title'),
      description: t('meta.description'),
      icons: {
        icon: "/logo.png",
        apple: "/apple-touch-icon.png",
      },
      openGraph: {
        title: t('meta.og.title'),
        description: t('meta.og.description'),
        images: ['/og-image.png'],
      },
      twitter: {
        card: 'summary_large_image',
        title: t('meta.twitter.title'),
        description: t('meta.twitter.description'),
        images: ['/twitter-image.png'],
      },
      alternates: {
          canonical: locale === 'en' ? `https://www.manusai.io` : `https://www.manusai.io/${locale}`,
      },
      manifest: "/site.webmanifest",
    };
  }

  export default function Home() {
    return (
      <main className="flex min-h-screen flex-col antialiased">
        <HeroSection />
        <FeaturedServers />
        <OverviewSection />
      </main>
    );
  } 