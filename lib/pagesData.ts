import rawPagesData from '@/data/pagesData.json';

export interface PageSection {
  title: string;
  contentHtml: string;
}

export interface PageData {
  pageName: string;
  slug: string;
  url: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  introHtml: string;
  sections: PageSection[];
  rawHtml: string;
  internalLink1?: string;
  internalLink2?: string;
  internalLink3?: string;
  externalLink?: string;
}

export const allPages: PageData[] = rawPagesData as PageData[];

export function getPageBySlug(slug: string): PageData | undefined {
  const normalizedSlug = slug.replace(/^\/|\/$/g, '');
  return allPages.find((p) => p.slug === normalizedSlug);
}

export const locationPages: PageData[] = allPages.filter((p) =>
  p.pageName.includes('(Location Page)')
);

export const mainNavPages = [
  { name: 'Home', href: '/' },
  { name: 'What is SR-22?', href: '/what-is-sr22/' },
  { name: 'How to Get SR-22', href: '/how-to-get-an-sr22-in-fort-worth/' },
  { name: 'Non-Owners', href: '/non-owners-sr22-insurance/' },
  { name: 'FAQ', href: '/faq/' },
  { name: 'Contact Us', href: '/contact-us/' },
];

export const siteConfig = {
  name: 'Trinity SR22 Insurance Fort Worth',
  phoneDisplay: '(817) 607-3345',
  phoneTel: 'tel:+18176073345',
  address: '500 Main St ste 400, Fort Worth, TX 76102, United States',
  mapIframeSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429277.30985828233!2d-97.64660940837456!3d32.799444640474135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22ddaae24d270fb7%3A0x400396f8c259b28e!2sTrinity%20SR22%20Insurance%20Fort%20Worth!5e0!3m2!1sen!2sph!4v1790679599637!5m2!1sen!2sph',
};
