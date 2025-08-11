
"use client";
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/Button';
import { Icons } from '@/components/Icons';
import { cn } from '@/lib/utils/helpers';
import { useI18n } from '@/components/I18nProvider';

const features = [
  'Plug & play with your existing camera network',
  'Instant alerts and comprehensive reports',
  'Fully scalable and ERP/WMS-ready'
];


const demoLink = '/demo';

export default function Hero() {
  const { t } = useI18n();
  const features = t.hero.bullets;
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {t.hero.subtitle}
            Computer Vision for Real-Time Logistics Control
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Detect, track, and audit everything that enters, leaves, or moves inside your logistics center or factory — using your existing cameras.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={demoLink}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
              )}
            >
              {t.hero.ctaPrimary}
              Request a Demo
            </Link>
            <Link
              href="#use-cases"
              className="text-base font-medium underline underline-offset-4 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {t.hero.ctaSecondary}
              Explore Use Cases
            </Link>
          </div>
          <ul role="list" className="mt-8 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Icons.Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                <span className="text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full">
          <div className="aspect-[16/10] w-full rounded-md bg-muted" />
        </div>
      </div>
    </section>
  );
}

