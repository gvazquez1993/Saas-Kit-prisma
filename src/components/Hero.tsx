
'use client';
import Link from 'next/link';

import { Icons } from '@/components/Icons';
import { useI18n } from '@/components/I18nProvider';

const demoLink = '/demo';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.hero.h1}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{t.hero.sub}</p>
          <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href={demoLink}
              className="w-full sm:w-auto bg-primary text-white font-medium rounded-lg px-5 py-3 text-center hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {t.hero.cta1}
            </Link>
            <Link
              href="#use-cases"
              className="w-full sm:w-auto text-base font-medium underline underline-offset-4 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-center"
            >
              {t.hero.cta2}
            </Link>
          </div>
          <ul role="list" className="mt-8 space-y-3">
            {t.hero.bullets.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Icons.Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                <span className="text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full">
          <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center text-muted-foreground">
            <span aria-hidden="true">Product Screenshot</span>
            <span className="sr-only">{t.hero.imageAlt}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

