'use client';
import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';

export const Promise: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          {t.promise.kicker}
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
          {t.promise.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          {t.promise.body}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-center">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-primary text-white font-medium hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {t.promise.ctaPrimary}
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 border font-medium hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {t.promise.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
};
