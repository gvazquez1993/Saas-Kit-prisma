'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu';

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
        className="w-28 rounded-lg border bg-white shadow-lg dark:bg-neutral-900 p-1"
      >
        <DropdownMenuItem asChild>
          <Link
            href={pathname ?? '/'}
            locale="en"
            role="menuitem"
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted text-sm"
          >
            EN
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={pathname ?? '/'}
            locale="es"
            role="menuitem"
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted text-sm"
          >
            ES
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
};
