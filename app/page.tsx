import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageRenderer from '@/components/PageRenderer';
import { getPageBySlug } from '@/lib/pagesData';

export async function generateMetadata(): Promise<Metadata> {
  const page = getPageBySlug('');
  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: 'https://www.sr22insurancefortworthtx.site/',
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: 'https://www.sr22insurancefortworthtx.site/',
      siteName: 'Trinity SR22 Insurance Fort Worth',
      images: [
        {
          url: '/images/hero-keys.webp',
          width: 1200,
          height: 800,
          alt: page.seoTitle,
        },
      ],
      type: 'website',
    },
  };
}

export default function HomePage() {
  const page = getPageBySlug('');
  if (!page) {
    notFound();
  }

  return <PageRenderer page={page} />;
}
