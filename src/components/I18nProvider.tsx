'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { defaultLocale, i18nDict, Locale } from '@/lib/i18n-dict';

interface I18nContextValue {
  locale: Locale;
  t: typeof i18nDict[Locale];
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: defaultLocale,
  t: i18nDict[defaultLocale],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLocale: () => {},
});

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale | null;
    if (stored && i18nDict[stored]) {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem('locale', locale);
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
  };

  const value: I18nContextValue = {
    locale,
    t: i18nDict[locale],
    setLocale,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);

