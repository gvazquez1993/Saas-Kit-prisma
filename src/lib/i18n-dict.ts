export type Locale = 'en' | 'es';

export const defaultLocale: Locale = 'en';

export const i18nDict: Record<Locale, {
  navbar: {
    solution: string;
    useCases: string;
    pricing: string;
    contact: string;
    requestDemo: string;
    login: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    bullets: string[];
  };
}> = {
  en: {
    navbar: {
      solution: 'Solution',
      useCases: 'Use Cases',
      pricing: 'Pricing',
      contact: 'Contact',
      requestDemo: 'Request a Demo',
      login: 'Login',
    },
    hero: {
      title: 'Computer Vision for Real-Time Logistics Control',
      subtitle:
        'Detect, track, and audit everything that enters, leaves, or moves inside your logistics center or factory — using your existing cameras.',
      ctaPrimary: 'Request a Demo',
      ctaSecondary: 'Explore Use Cases',
      bullets: [
        'Plug & play with your existing camera network',
        'Instant alerts and comprehensive reports',
        'Fully scalable and ERP/WMS-ready',
      ],
    },
  },
  es: {
    navbar: {
      solution: 'Solución',
      useCases: 'Casos de uso',
      pricing: 'Precios',
      contact: 'Contacto',
      requestDemo: 'Solicitar una demo',
      login: 'Iniciar sesión',
    },
    hero: {
      title: 'Visión por computadora para el control logístico en tiempo real',
      subtitle:
        'Detecta, rastrea y audita todo lo que entra, sale o se mueve dentro de tu centro logístico o fábrica utilizando tus cámaras existentes.',
      ctaPrimary: 'Solicitar una demo',
      ctaSecondary: 'Explorar casos de uso',
      bullets: [
        'Plug & play con tu red de cámaras existente',
        'Alertas instantáneas e informes completos',
        'Totalmente escalable y compatible con ERP/WMS',
      ],
    },
  },
};

