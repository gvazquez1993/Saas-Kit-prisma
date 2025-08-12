'use client';
import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';

export default function CTA() {
  const { t } = useI18n();
  return (
    <section id="cta" className="py-14 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {/* Simple headline; adjust later if needed */}
          Ready to see ANGai in action?
        </h2>
        <p className="mt-3 text-base sm:text-lg text-muted-foreground">
          Start with our pricing or talk to us to tailor a plan for your operations.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-center">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-primary text-white font-medium hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {t.promise.ctaPrimary /* 'See Pricing' / 'Ver Precios' */}
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 border font-medium hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {t.promise.ctaSecondary /* 'Contact Us' / 'Contáctanos' */}
          </Link>
        </div>
      </div>
    </section>
  );
}
