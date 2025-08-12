'use client';

import * as React from 'react';
import { useI18n } from '@/components/I18nProvider';

// Minimal icon placeholders (inline SVG) to avoid deps
const icons = {
  Integration: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="6" y="6" width="4" height="12" rx="1" stroke="currentColor" fill="none" />
      <rect x="14" y="6" width="4" height="12" rx="1" stroke="currentColor" fill="none" />
    </svg>
  ),
  'Real-time': (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" fill="none" />
      <path d="M12 7v6l4 2" stroke="currentColor" />
    </svg>
  ),
  Reports: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" fill="none" />
      <path d="M8 8h8M8 12h8M8 16h6" stroke="currentColor" />
    </svg>
  ),
  Scalable: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <path d="M4 17h6v3H4zM10 13h6v7h-6zM16 9h6v11h-6z" fill="none" stroke="currentColor" />
    </svg>
  ),
};

export const ValueProps: React.FC = () => {
  const { t } = useI18n();
  const items = t.valueProps.items;

  // Map icon by English iconLabel; Spanish variant maps to the same keys
  const iconFor = (label: string) => {
    if (label.toLowerCase().includes('integr')) return icons.Integration;
    if (label.toLowerCase().includes('real')) return icons['Real-time'];
    if (label.toLowerCase().includes('report')) return icons.Reports;
    return icons.Scalable;
    // default
  };

  return (
    <section aria-labelledby="value-props" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="value-props" className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {t.valueProps.title}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => {
            const Icon = iconFor(it.iconLabel);
            return (
              <article key={idx} className="rounded-2xl border p-6 shadow-sm bg-card">
                <div className="flex items-center gap-3">
                  <Icon className="text-foreground/80" />
                  <span className="sr-only">{it.iconLabel}</span>
                </div>
                <h3 className="mt-4 text-lg font-medium">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

