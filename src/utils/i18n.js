import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: {
        nav: {
          img: '/bosta-en-logo.svg',
          li1: 'Products',
          li2: 'Integrations',
          li3: 'Use Cases',
          li4: 'Pricing',
          li5: 'Blog',
          li6: 'العربية',
          items1: ['Solutions', 'Dashboard', 'Mobile App'],
          items2: ['Shopify', 'WooCommerce', 'Custom APIs'],
          items3: ['Businesses', 'SMEs'],
          signIn: 'Sign In',
          signUp: 'Sign Up',
          trackShipment: 'Track Shipment',
          trackYourShipment: 'Track your shipment',
          trackingNo: 'Tracking No.',
        },
        hero: {
          joinGeneration: 'Join A New Generation Of Logistics!',
          redefine:
            'Redefining how you ship, track, collect, deliver all through innovative tech-solutions and efficient operations.',
          startNow: 'Start now',
        },
        footer: {
          img: '/bosta-en-logo.svg',
          li1: 'Products',
          li2: 'Integrations',
          li3: 'Use Cases',
          li4: 'Company',
          items1: ['Solutions', 'Dashboard', 'Mobile App'],
          items2: ['Shopify', 'WooCommerce', 'Custom APIs'],
          items3: ['Businesses', 'SMEs'],
          company: 'Company',
          companyItems: ['About us', 'Careers', 'Pricing', 'FAQ'],
          trackShipment: 'Track Shipment',
        },
      },
    },
    ar: {
      translation: {
        nav: {
          img: '/bosta-ar-logo.svg',
          li1: 'المنتجات',
          li2: 'التكاملات',
          li3: 'حالات الاستخدام',
          li4: 'التسعير',
          li5: 'المدونة',
          li6: 'English',
          items1: ['الحلول', 'لوحة القيادة', 'التطبيق الجوَّال'],
          items2: ['شوبيفاي', 'ووكوميرس', 'واجهات البرمجة التطبيقية المخصصة'],
          items3: ['الشركات', 'الشركات الصغيرة والمتوسطة'],
          signIn: 'تسجيل الدخول',
          signUp: 'سجل',
          trackShipment: 'تتبع الشحنة',
          trackYourShipment: 'تتبع شحنتك',
          trackingNo: 'رقم التتبع',
        },
        hero: {
          joinGeneration: 'انضم إلى جيل جديد من اللوجستيات!',
          redefine:
            'إعادة تعريف كيفية شحنك، تتبعك، جمعك، تسليمك جميعًا من خلال حلول تقنية مبتكرة وعمليات فعالة.',
          startNow: 'ابدأ الآن',
        },
        footer: {
          img: '/bosta-ar-logo.svg',
          li1: 'المنتجات',
          li2: 'التكاملات',
          li3: 'حالات الاستخدام',
          li4: 'الشركة',
          items1: ['الحلول', 'لوحة القيادة', 'التطبيق الجوَّال'],
          items2: ['شوبيفاي', 'ووكوميرس', 'واجهات البرمجة التطبيقية المخصصة'],
          items3: ['الشركات', 'الشركات الصغيرة والمتوسطة'],
          company: 'الشركة',
          companyItems: ['من نحن', 'وظائف', 'التسعير', 'الأسئلة الشائعة'],
          trackShipment: 'تتبع الشحنة',
        },
      },
    },
  },
});

export default i18n;
