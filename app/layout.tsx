import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';
import { siteConfig } from '@/lib/pagesData';

export const viewport: Viewport = {
  themeColor: '#0B2347',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sr22insurancefortworthtx.site'),
  title: {
    default: 'SR22 Insurance Fort Worth TX | Trinity SR22 Insurance',
    template: '%s | Trinity SR22 Insurance Fort Worth',
  },
  description:
    'Need SR-22 insurance in Fort Worth? Trinity SR22 Insurance gets high-risk drivers affordable coverage and fast TxDPS filings. Call (817) 607-3345.',
  icons: {
    icon: '/favicon.svg',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'SR22 Insurance Fort Worth TX | Trinity SR22 Insurance',
    description:
      'Need SR-22 insurance in Fort Worth? Trinity SR22 Insurance gets high-risk drivers affordable coverage and fast TxDPS filings. Call (817) 607-3345.',
    url: 'https://www.sr22insurancefortworthtx.site',
    siteName: 'Trinity SR22 Insurance Fort Worth',
    images: [
      {
        url: '/images/hero-keys.webp',
        width: 1200,
        height: 800,
        alt: 'Trinity SR22 Insurance Fort Worth',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  url: 'https://www.sr22insurancefortworthtx.site/',
  telephone: '+1-817-607-3345',
  image: 'https://www.sr22insurancefortworthtx.site/logo.png',
  description:
    'Helps Fort Worth drivers get a filing-ready SR-22 quote by phone so an insurer can file with the Texas Department of Public Safety.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '500 Main St ste 400',
    addressLocality: 'Fort Worth',
    addressRegion: 'TX',
    postalCode: '76102',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Fort Worth' },
    { '@type': 'AdministrativeArea', name: 'Texas' },
    'Arlington',
    'North Richland Hills',
    'Euless',
    'Bedford',
    'Grapevine',
    'Keller',
    'Haltom City',
    'Hurst',
    'Burleson',
    'Mansfield',
    'Dallas',
    'Tarrant County',
  ],
  hasMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429277.30985828233!2d-97.64660940837456!3d32.799444640474135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22ddaae24d270fb7%3A0x400396f8c259b28e!2sTrinity%20SR22%20Insurance%20Fort%20Worth!5e0!3m2!1sen!2sph!4v1790679599637!5m2!1sen!2sph',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-navy selection:bg-gold/20 selection:text-navy">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
