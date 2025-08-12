'use client';

import * as React from 'react';
import { useI18n } from '@/components/I18nProvider';

export const SocialProof: React.FC = () => {
  const { t } = useI18n();
  return (
    <section aria-labelledby="social-proof" className="py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="social-proof" className="text-center text-sm text-muted-foreground">
          {t.social.trusted}
        </h2>
        <div
          aria-label={t.social.logosAlt}
          className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center opacity-80"
        >
          {/* Replace placeholders with real logos when available */}
          <div className="h-8 w-24 bg-neutral-300 dark:bg-neutral-700 rounded-md" aria-hidden="true" />
          <div className="h-8 w-24 bg-neutral-300 dark:bg-neutral-700 rounded-md" aria-hidden="true" />
          <div className="h-8 w-24 bg-neutral-300 dark:bg-neutral-700 rounded-md" aria-hidden="true" />
          <div className="h-8 w-24 bg-neutral-300 dark:bg-neutral-700 rounded-md" aria-hidden="true" />
          <div className="h-8 w-24 bg-neutral-300 dark:bg-neutral-700 rounded-md" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

