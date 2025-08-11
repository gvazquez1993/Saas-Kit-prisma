import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import { Nav } from './NavBar';
import config from '@/lib/config/marketing';
import { MainLogoText } from '@/components/MainLogo';
import { ThemeDropDownMenu } from '../../../components/ThemeDropdown';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const Header = () => {
  const { routes } = config;

  return (
    <header>
      <div className="flex items-center justify-between p-6">
        <MainLogoText />
        <Nav items={routes} />
        <div className="flex items-center space-x-2">
          <ThemeDropDownMenu />
          <LanguageSwitcher />
          <Link
            href="/demo"
            className={cn(buttonVariants({ size: 'sm' }), 'px-6')}
          >
            Request a Demo
          </Link>
          <Link
            href="/auth/login"
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-6'
            )}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};
