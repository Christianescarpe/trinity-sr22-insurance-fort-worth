import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, ArrowRight, Shield, Award, CheckCircle, FileText } from 'lucide-react';
import Hero from './Hero';
import AccordionGroup from './Accordion';
import { PageData, locationPages, siteConfig } from '@/lib/pagesData';

interface PageRendererProps {
  page: PageData;
}

export default function PageRenderer({ page }: PageRendererProps) {
  const isHomePage = page.slug === '';
  const isFaqPage = page.slug === 'faq';
  const isStepsPage = page.slug === 'how-to-get-an-sr22-in-fort-worth';
  const isContactPage = page.slug === 'contact-us';
  const isLocationPage = page.pageName.includes('(Location Page)');

  // Select suitable hero image based on page slug
  let heroImage = '/images/hero-keys.webp';
  if (page.slug === 'what-is-sr22') heroImage = '/images/man-document.webp';
  else if (isStepsPage) heroImage = '/images/tablet-form.webp';
  else if (page.slug === 'non-owners-sr22-insurance') heroImage = '/images/hands-protect.webp';
  else if (isFaqPage) heroImage = '/images/clipboard-form.webp';
  else if (isContactPage) heroImage = '/images/agent-consult.webp';
  else if (isLocationPage) {
    const locImages = [
      '/images/crash-street.webp',
      '/images/woman-accident.webp',
      '/images/damage-inspection.webp',
      '/images/coverage-umbrella.webp',
      '/images/signing-document.webp',
      '/images/agent-consult.webp',
      '/images/wrecked-car.webp',
    ];
    const charCode = page.slug.charCodeAt(0) || 0;
    heroImage = locImages[charCode % locImages.length];
  }

  // Filter sections into special presentation formats
  const stepSections = page.sections.filter((s) => s.title.toLowerCase().startsWith('step '));
  const nonStepSections = page.sections.filter((s) => !s.title.toLowerCase().startsWith('step '));

  // Determine if sections look like FAQ questions (ending with '?')
  const faqSections = isFaqPage
    ? page.sections.filter((s) => s.title.includes('?'))
    : [];
  const standardSections = isFaqPage
    ? page.sections.filter((s) => !s.title.includes('?'))
    : isStepsPage
    ? nonStepSections
    : page.sections;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        h1={page.h1}
        introHtml={page.introHtml}
        heroImage={heroImage}
        imageAlt={`${page.h1} - Trinity SR22 Insurance Fort Worth`}
        badgeText={
          isLocationPage
            ? `Same-day SR-22 filing for ${page.pageName.replace(' (Location Page)', '')} drivers`
            : 'Same-day electronic filing with Texas DPS'
        }
      />

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        {/* Step-by-Step Layout for How-To Page */}
        {stepSections.length > 0 && (
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-gold font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 mb-2">
                <FileText className="w-4 h-4" />
                Step-by-Step Filing Walkthrough
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                How Fort Worth Drivers Navigate TxDPS Reinstatement
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stepSections.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-surface-off border border-surface-line rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3 py-1 bg-navy text-white text-xs font-bold rounded-full mb-3">
                      {step.title.split(':')[0]}
                    </span>
                    <h3 className="text-lg font-bold text-navy mb-3">
                      {step.title.includes(':') ? step.title.split(':')[1].trim() : step.title}
                    </h3>
                    <div
                      className="sheet-content text-sm"
                      dangerouslySetInnerHTML={{ __html: step.contentHtml }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Accordion for FAQ Page */}
        {isFaqPage && faqSections.length > 0 && (
          <section className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <span className="text-gold font-bold text-xs uppercase tracking-widest">
                Answers to Frequent Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
                Frequently Asked Questions
              </h2>
            </div>
            <AccordionGroup
              items={faqSections.map((s) => ({
                title: s.title,
                contentHtml: s.contentHtml,
              }))}
            />
          </section>
        )}

        {/* Standard Sections: Rendered with alternating split layouts or cards */}
        {standardSections.map((sec, idx) => {
          // Choose alternating images for visual richness
          const sectionImages = [
            '/images/signing-document.webp',
            '/images/coverage-umbrella.webp',
            '/images/agent-consult.webp',
            '/images/finance-blue-car.webp',
            '/images/damage-inspection.webp',
            '/images/tablet-form.webp',
            '/images/hands-protect.webp',
          ];
          const secImage = sectionImages[idx % sectionImages.length];
          const isSplit = idx % 2 === 1;

          return (
            <section
              key={idx}
              className={`pt-6 ${
                idx !== 0 ? 'border-t border-surface-line/70' : ''
              }`}
            >
              {isSplit ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 order-2 lg:order-1 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                      {sec.title}
                    </h2>
                    <div
                      className="sheet-content"
                      dangerouslySetInnerHTML={{ __html: sec.contentHtml }}
                    />
                  </div>
                  <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
                    <div className="relative w-full max-w-md h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-surface-line bg-slate-100">
                      <Image
                        src={secImage}
                        alt={`${sec.title} - Trinity SR22 Insurance`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                    {sec.title}
                  </h2>
                  <div
                    className="sheet-content"
                    dangerouslySetInnerHTML={{ __html: sec.contentHtml }}
                  />
                </div>
              )}
            </section>
          );
        })}

        {/* Location Pills Grid */}
        <section className="bg-surface-off border border-surface-line rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-gold font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold" />
                Service Areas in Tarrant County
              </span>
              <h3 className="text-xl font-bold text-navy mt-1">
                Fast SR-22 Filings Across Fort Worth & Surrounding Communities
              </h3>
            </div>
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2 text-brandBlue hover:text-navy font-bold text-sm"
            >
              <span>Call (817) 607-3345</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors border ${
                isHomePage
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-navy border-surface-line hover:border-brandBlue hover:text-brandBlue'
              }`}
            >
              Fort Worth (Main Office)
            </Link>
            {locationPages.map((loc) => {
              const isActive = loc.slug === page.slug;
              return (
                <Link
                  key={loc.slug}
                  href={loc.url}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors border ${
                    isActive
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-navy border-surface-line hover:border-brandBlue hover:text-brandBlue'
                  }`}
                >
                  {loc.pageName.replace(' (Location Page)', '')}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-navy via-navy-dark to-brandBlue-dark text-white p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-widest">
              <Shield className="w-4 h-4" />
              Trinity SR22 Insurance Fort Worth
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Get Your Free, No-Pressure SR-22 Quote Today
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              We answer questions fast and file paperwork faster. Call Trinity SR22 Insurance Fort Worth today at{' '}
              <a href={siteConfig.phoneTel} className="text-gold font-bold underline">
                {siteConfig.phoneDisplay}
              </a>{' '}
              or visit our local office at 500 Main St ste 400, Fort Worth, TX 76102.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-hover text-navy px-6 py-4 rounded-full font-bold text-base shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 fill-navy text-navy" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
              <span className="text-xs sm:text-sm text-slate-300">
                Same-day electronic submission to Texas DPS
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
