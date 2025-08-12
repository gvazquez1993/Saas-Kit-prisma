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
    h1: string;
    sub: string;
    cta1: string;
    cta2: string;
    imageAlt: string;
    bullets: string[];
  };
  social: {
    trusted: string;
    logosAlt: string;
    tech: string[];
  };
  valueProps: {
    title: string;
    items: {
      iconLabel: string;
      title: string;
      text: string;
    }[];
  };
  promise: {
    kicker: string;
    title: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
      h1: 'Computer Vision for Real-Time Logistics Control',
      sub: 'Detect, track, and audit everything that enters, leaves, or moves inside your logistics center or factory — using your existing cameras.',
      cta1: 'Request a Demo',
      cta2: 'Explore Use Cases',
      imageAlt: 'ANGai dashboard preview',
      bullets: [
        'Plug & play with your existing camera network',
        'Instant alerts and comprehensive reports',
        'Fully scalable and ERP/WMS-ready',
      ],
    },
    social: {
      trusted: 'Built with a modern, proven stack',
      logosAlt: 'Technology ecosystem logos',
      tech: ['AWS', 'Kubernetes', 'Terraform', 'OpenCV', 'Python', 'ONVIF'],
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
        {
          iconLabel: 'Edge',
          title: 'Edge + Cloud',
          text: 'Run models at the edge or in the cloud to balance latency and cost.',
        },
        {
          iconLabel: 'Privacy',
          title: 'Security & privacy',
          text: 'Role-based access, on-prem options, and anonymization for sensitive footage.',
        },
        {
          iconLabel: 'Integrations',
          title: 'ERP/WMS integrations',
          text: 'Connect with your ERP/WMS via REST/Webhooks for automated workflows.',
        },
        {
          iconLabel: 'FinOps',
          title: 'Cost control',
          text: 'Usage-based pricing, monitoring and optimizations to keep costs predictable.',
        },
      ],
    },
    promise: {
      kicker: 'Deploy in days, not months',
      title: 'From cameras to real-time logistics control — fast',
      body: 'Connect your existing camera network and start detecting vehicles, pallets, and goods movement in days. No custom hardware, no fragile pipelines — just a managed, scalable platform that fits your ERP/WMS.',
      ctaPrimary: 'See Pricing',
      ctaSecondary: 'Contact Us',
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
      h1: 'Visión por computadora para control logístico en tiempo real',
      sub: 'Detecta, rastrea y audita todo lo que entra, sale o se mueve dentro de tu centro logístico o fábrica — usando tus cámaras existentes.',
      cta1: 'Solicitar demo',
      cta2: 'Ver casos de uso',
      imageAlt: 'Vista previa del panel de ANGai',
      bullets: [
        'Plug & play con tus cámaras existentes',
        'Alertas instantáneas y reportes completos',
        'Totalmente escalable y listo para ERP/WMS',
      ],
    },
    social: {
      trusted: 'Construido con un stack moderno y probado',
      logosAlt: 'Logotipos del ecosistema tecnológico',
      tech: ['AWS', 'Kubernetes', 'Terraform', 'OpenCV', 'Python', 'ONVIF'],
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
        {
          iconLabel: 'Edge',
          title: 'Edge + Cloud',
          text: 'Ejecuta modelos en el edge o en la nube para equilibrar latencia y costo.',
        },
        {
          iconLabel: 'Privacidad',
          title: 'Seguridad y privacidad',
          text: 'Acceso basado en roles, opciones on-prem y anonimización para material sensible.',
        },
        {
          iconLabel: 'Integraciones',
          title: 'Integraciones ERP/WMS',
          text: 'Conecta con tu ERP/WMS vía REST/Webhooks para flujos automatizados.',
        },
        {
          iconLabel: 'FinOps',
          title: 'Control de costos',
          text: 'Precios basados en uso, monitoreo y optimizaciones para mantener costos predecibles.',
        },
      ],
    },
    promise: {
      kicker: 'Despliega en días, no meses',
      title: 'De cámaras a control logístico en tiempo real — rápido',
      body: 'Conecta tu red de cámaras existente y empieza a detectar vehículos, pallets y movimientos de mercancías en días. Sin hardware a medida, sin pipelines frágiles — una plataforma gestionada y escalable que encaja con tu ERP/WMS.',
      ctaPrimary: 'Ver Precios',
      ctaSecondary: 'Contáctanos',
    },
  },
};
