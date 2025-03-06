import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import InviteClient from './client';

type PageProps = {  
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations('Index');
  
  return {
    title: `${t('meta.title')} - 获取邀请码`,
    description: `申请Manus AI封闭测试邀请码，获得优先体验资格`,
    openGraph: {
      title: `${t('meta.og.title')} - 获取邀请码`,
      description: `申请Manus AI封闭测试邀请码，获得优先体验资格`,
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('meta.twitter.title')} - 获取邀请码`,
      description: `申请Manus AI封闭测试邀请码，获得优先体验资格`,
      images: ['/twitter-image.png'],
    },
    alternates: {
        canonical: locale === 'en' ? `https://www.manusai.io/invite` : `https://www.manusai.io/${locale}/invite`,
    },
  };
}

export default function InvitePage() {
  return (
    <main className="flex min-h-screen flex-col antialiased py-16 md:py-24">
      <InviteClient />
    </main>
  );
} 