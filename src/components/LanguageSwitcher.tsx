'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu';
import { useI18n } from './I18nProvider';

export const LanguageSwitcher = () => {
  const { setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: 'en' | 'es') => {
    setLocale(lang);
    setOpen(false);
  };

  return (
    <div className="relative">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={open}
            aria-controls="language-menu"
            aria-label="Change language"
            className="inline-flex items-center justify-center rounded-full p-2 hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Globe className="h-5 w-5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          id="language-menu"
          role="menu"
          align="end"
          className="w-24 rounded-lg border bg-white shadow-lg dark:bg-neutral-900 z-50 p-1"
        >
          <DropdownMenuItem
            onSelect={() => handleSelect('en')}
            role="menuitem"
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted text-sm"
          >
            EN
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => handleSelect('es')}
            role="menuitem"
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted text-sm"
          >
            ES
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
