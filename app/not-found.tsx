import Link from 'next/link';
import { Phone, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/pagesData';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-surface-off">
      <div className="max-w-md mx-auto text-center space-y-6">
        <span className="text-gold font-bold text-sm tracking-widest uppercase">
          404 - Page Not Found
        </span>
        <h1 className="text-3xl font-extrabold text-navy">
          Looking for Texas SR-22 Insurance Information?
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          The page you requested could not be found. You can return to our homepage or speak directly with an SR-22 specialist right now.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-navy text-white px-5 py-3 rounded-full font-bold text-sm hover:bg-navy-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <a
            href={siteConfig.phoneTel}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-navy px-5 py-3 rounded-full font-bold text-sm transition-colors"
          >
            <Phone className="w-4 h-4 fill-navy text-navy" />
            <span>Call {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
