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
  Edge: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" fill="none" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" />
    </svg>
  ),
  Privacy: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <path d="M12 3l8 4v5c0 5-3 9-8 10-5-1-8-5-8-10V7l8-4z" stroke="currentColor" fill="none" />
    </svg>
  ),
  Integrations: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <path d="M9 2v6M15 2v6M7 10h10v4a5 5 0 11-10 0v-4z" stroke="currentColor" fill="none" />
    </svg>
  ),
  FinOps: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" fill="none" />
      <path d="M12 8v8M9 12h6" stroke="currentColor" />
    </svg>
  ),
};

export const ValueProps: React.FC = () => {
  const { t } = useI18n();
  const items = t.valueProps.items;

  // Map icon by English iconLabel; Spanish variant maps to the same keys
  const iconFor = (label: string) => {
    const lower = label.toLowerCase();
    if (lower.includes('integrations') || lower.includes('integraciones')) return icons.Integrations;
    if (lower.includes('integration') || lower.includes('integración')) return icons.Integration;
    if (lower.includes('real')) return icons['Real-time'];
    if (lower.includes('report') || lower.includes('reporte')) return icons.Reports;
    if (lower.includes('edge')) return icons.Edge;
    if (lower.includes('priv')) return icons.Privacy;
    if (lower.includes('finops') || lower.includes('cost')) return icons.FinOps;
    if (lower.includes('scal') || lower.includes('escal')) return icons.Scalable;
    return icons.Scalable;
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

