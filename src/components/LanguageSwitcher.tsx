'use client';

import * as React from 'react';
import { useI18n } from '@/components/I18nProvider';

// Simple globe icon using inline SVG to avoid extra dependencies
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="5"
        ry="10"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
      />
      <path
        d="M2 12h20"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  // Close on outside click or Esc
  React.useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const select = (lang: 'en' | 'es') => {
    setLocale(lang); // instant swap, no navigation
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="lang-menu"
        aria-label="Change language"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-full p-2 hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <GlobeIcon />
      </button>
      {open && (
        <div
          id="lang-menu"
          role="menu"
          className="absolute right-0 mt-2 w-24 rounded-lg border bg-white shadow-lg dark:bg-neutral-900 z-50 p-1"
        >
          <button
            role="menuitem"
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted text-sm"
            onClick={() => select('en')}
            aria-current={locale === 'en' ? 'true' : undefined}
          >
            EN
          </button>
          <button
            role="menuitem"
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted text-sm"
            onClick={() => select('es')}
            aria-current={locale === 'es' ? 'true' : undefined}
          >
            ES
          </button>
        </div>
      )}
    </div>
  );
};
