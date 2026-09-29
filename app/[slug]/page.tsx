import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageRenderer from '@/components/PageRenderer';
import { allPages, getPageBySlug } from '@/lib/pagesData';

interface DynamicPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPages
    .filter((p) => p.slug !== '')
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({
  params,
}: DynamicPageProps): Promise<Metadata> {
  const page = getPageBySlug(params.slug);
  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `https://www.sr22insurancefortworthtx.site${page.url}`,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: `https://www.sr22insurancefortworthtx.site${page.url}`,
      siteName: 'Trinity SR22 Insurance Fort Worth',
      type: 'article',
    },
  };
}

export default function DynamicPage({ params }: DynamicPageProps) {
  const page = getPageBySlug(params.slug);
  if (!page) {
    notFound();
  }

  return <PageRenderer page={page} />;
}
