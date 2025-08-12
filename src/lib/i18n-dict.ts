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
  social: {
    trusted: string;
    logosAlt: string;
  };
  valueProps: {
    title: string;
    items: {
      iconLabel: string;
      title: string;
      text: string;
    }[];
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
    social: {
      trusted: 'Trusted by leaders in logistics, manufacturing, and retail',
      logosAlt: 'Partner and customer logos',
    },
    valueProps: {
      title: 'Why ANGai',
      items: [
        {
          iconLabel: 'Integration',
          title: 'Easy integration',
          text: 'Connect to your existing camera network in minutes — no extra hardware needed.',
        },
        {
          iconLabel: 'Real-time',
          title: 'Real-time detection',
          text: 'Get instant alerts for vehicles, pallets, and goods movement.',
        },
        {
          iconLabel: 'Reports',
          title: 'Actionable reports',
          text: 'Access detailed audits, KPIs, and compliance-ready documentation.',
        },
        {
          iconLabel: 'Scalable',
          title: 'Scalable SaaS',
          text: 'Grow from one site to hundreds with a fully managed cloud platform.',
        },
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
    social: {
      trusted: 'Confiado por líderes en logística, manufactura y retail',
      logosAlt: 'Logotipos de socios y clientes',
    },
    valueProps: {
      title: 'Por qué ANGai',
      items: [
        {
          iconLabel: 'Integración',
          title: 'Integración sencilla',
          text: 'Conecta con tu red de cámaras existente en minutos — sin hardware adicional.',
        },
        {
          iconLabel: 'Tiempo real',
          title: 'Detección en tiempo real',
          text: 'Recibe alertas instantáneas de vehículos, pallets y movimientos de mercancías.',
        },
        {
          iconLabel: 'Reportes',
          title: 'Reportes accionables',
          text: 'Accede a auditorías detalladas, KPIs y documentación lista para cumplimiento.',
        },
        {
          iconLabel: 'Escalable',
          title: 'SaaS escalable',
          text: 'Escala de un sitio a cientos con una plataforma en la nube totalmente gestionada.',
        },
      ],
    },
  },
};

