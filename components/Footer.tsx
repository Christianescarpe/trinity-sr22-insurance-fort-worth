import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { mainNavPages, locationPages, siteConfig } from '@/lib/pagesData';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block bg-white p-3 rounded-xl">
              <div className="relative h-12 w-48">
                <Image
                  src="/logo.png"
                  alt="Trinity SR22 Insurance Fort Worth"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Helping Fort Worth and Tarrant County drivers navigate SR-22 certificates and Texas DPS requirements with fast electronic filings and straightforward coverage options.
            </p>
            <div className="pt-2 space-y-2.5 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href={siteConfig.phoneTel}
                  className="text-white font-bold hover:text-gold transition-colors text-base"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold inline-block"></span>
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {mainNavPages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold inline-block"></span>
              Tarrant County
            </h3>
            <ul className="space-y-2 text-sm">
              {locationPages.slice(0, 5).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={loc.url}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {loc.pageName.replace(' (Location Page)', '')}
                  </Link>
                </li>
              ))}
              {locationPages.slice(5, 10).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={loc.url}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {loc.pageName.replace(' (Location Page)', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Texas DPS Link (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold" />
              Texas DPS Filing Verification
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Official SR-22 requirements are established by Texas Transportation Code Chapter 601 and administered by the Texas Department of Public Safety.
            </p>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Clock className="w-4 h-4 text-gold" />
                <span>Fast Electronic Transmit</span>
              </div>
              <p>
                Insurers transmit filings electronically to Texas DPS within 24 to 72 hours once coverage binds.
              </p>
              <a
                href="https://www.dps.texas.gov/section/driver-license/financial-responsibility-insurance-certificate-sr-22"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gold hover:underline font-semibold mt-1"
              >
                Texas DPS Official SR-22 Guidelines
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Visible Google Map Section */}
        <div className="py-10 border-b border-slate-800" id="office-map">
          <div className="mb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div>
              <span className="text-gold font-semibold text-xs uppercase tracking-widest">Local Office Map</span>
              <h3 className="text-white text-xl font-bold">Trinity SR22 Insurance Fort Worth</h3>
              <p className="text-slate-400 text-sm">500 Main St ste 400, Fort Worth, TX 76102, United States</p>
            </div>
            <a
              href="https://maps.google.com/?cid=4612711680190108302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline font-semibold"
            >
              Open in Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* User Requested Visible Iframe Map */}
          <div className="w-full overflow-hidden rounded-2xl border-2 border-slate-700/60 shadow-2xl bg-slate-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429277.30985828233!2d-97.64660940837456!3d32.799444640474135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22ddaae24d270fb7%3A0x400396f8c259b28e!2sTrinity%20SR22%20Insurance%20Fort%20Worth!5e0!3m2!1sen!2sph!4v1790679599637!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Trinity SR22 Insurance Fort Worth Google Map Location"
              className="w-full h-[380px] md:h-[450px] filter saturate-105"
            ></iframe>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Trinity SR22 Insurance Fort Worth. All rights reserved.</p>
          <p className="text-center md:text-right">
            Phone: <a href={siteConfig.phoneTel} className="text-slate-400 hover:text-white underline">{siteConfig.phoneDisplay}</a> · 500 Main St ste 400, Fort Worth, TX 76102
          </p>
        </div>
      </div>
    </footer>
  );
}
