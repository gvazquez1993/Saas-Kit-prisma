'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Icons } from '@/components/Icons';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils/helpers';

const navItems = [
  { href: '#solution', label: 'Solution' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' }
];

const demoLink = '/demo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Nubent
            </Link>
            <div className="hidden md:flex md:ml-10 md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={demoLink}
              className={cn(
                buttonVariants({ size: 'sm' }),
                'rounded-full px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
              )}
            >
              Request a Demo
            </Link>
            <button
              type="button"
              aria-label="Toggle Menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {open ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden px-6 pb-6 space-y-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm font-medium text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={demoLink}
            className="block text-sm font-medium text-primary underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={() => setOpen(false)}
          >
            Request a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}

