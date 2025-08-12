"use client";

import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import { Nav } from './NavBar';
import { MainLogoText } from '@/components/MainLogo';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useI18n } from '@/components/I18nProvider';

export const Header = () => {
  const { t } = useI18n();
  const routes = [
    { title: t.navbar.solution, link: '#solution' },
    { title: t.navbar.useCases, link: '#use-cases' },
    { title: t.navbar.pricing, link: '#pricing' },
    { title: t.navbar.contact, link: '#contact' },
  ];

  return (
    <header>
      <div className="flex items-center justify-between p-6">
        <MainLogoText />
        <Nav items={routes} />
        <div className="flex items-center space-x-3">
          <Link
            href="/demo"
            className={cn(buttonVariants({ size: 'sm' }), 'px-6')}
          >
            {t.navbar.requestDemo}
          </Link>
          <LanguageSwitcher />
          <Link
            href="/auth/login"
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-6'
            )}
          >
            {t.navbar.login}
          </Link>
        </div>
      </div>
    </header>
  );
};
