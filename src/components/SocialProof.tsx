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
          className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-80"
        >
          {t.social.tech.slice(0, 6).map((name: string) => (
            <div
              key={name}
              className="h-9 min-w-28 px-4 rounded-md border text-sm flex items-center justify-center text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

