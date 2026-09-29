'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  contentHtml: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, contentHtml, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-surface-line rounded-xl bg-white overflow-hidden shadow-sm transition-all duration-200 hover:border-brandBlue/30 hover:shadow-md">
      <button
        type="button"
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-navy hover:text-brandBlue transition-colors focus:outline-none focus:bg-brandBlue-soft/50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg leading-snug">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-brandBlue flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-gold' : ''
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div
          className="px-6 pb-6 pt-1 text-slate-700 sheet-content border-t border-slate-100"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  );
}

interface AccordionGroupProps {
  items: { title: string; contentHtml: string }[];
}

export default function AccordionGroup({ items }: AccordionGroupProps) {
  return (
    <div className="space-y-3.5">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          contentHtml={item.contentHtml}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
}
