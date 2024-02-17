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
        trackSearch: {
          trackYourOrder: 'Track Your Order',
          trackOrderTitle: 'Track Your Order',
          orderUpdates:
            'All order updates will be available through this link.',
          enterTrackingNumber: 'Tracking No.',
          orderID: 'ORDER #{{trackingID}}',
          noRecord:
            'No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.',
        },
        orderDetails: {
          orderNumber: 'Order Number',
          returnedToShipper: 'Order is returned back to the shipper',
          delivered: 'Order has been delivered',
          cancelled: 'Order has been cancelled',
          lastUpdated: 'Last Updated',
          merchantName: 'Merchant Name',
          deliveryDate: 'Delivery Date',
        },
        deliveryBar: {
          orderCreated: 'Order Created',
          orderReceived: 'Order Received from Merchant',
          outForDelivery: 'Order Out for Delivery',
          orderDelivered: 'Order Delivered',
        },
        orderTable: {
          orderCreated: 'Order Created',
          orderReceived: 'Order Received from Merchant',
          outForDelivery: 'Order Out for Delivery',
          orderDelivered: 'Order Delivered',
          orderDeliveredToSender: 'Order Delivered to Sender',
          orderCancelled: 'Order Cancelled',
          waitingForCustomerAction: 'Waiting for Customer action',
          orderDetails: 'Order Details',
          details: 'Details',
          date: 'Date',
          time: 'Time',
          reason: 'Reason',
          deliveryAddress: 'Address of Delivery',
          anyProblems: 'Do you have any problems with your order?!',
          reportProblem: 'Report the problem',
          address: '20 Street 66, New Cairo 1, Cairo Governorate 4723412',
          reasonText: {
            'Retry delivery - the customer is not in the address.':
              'Retry delivery - the customer is not in the address.',
            'Postponed - the customer requested postponement for another day.':
              'Postponed - the customer requested postponement for another day.',
            'Customer is not answering.': 'Customer is not answering.',
          },
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
        trackSearch: {
          trackYourOrder: 'تتبع طلبك',
          trackOrderTitle: 'تتبع طلبك',
          orderUpdates: 'سيكون جميع تحديثات الطلب متاحة من خلال هذا الرابط.',
          enterTrackingNumber: 'رقم التتبع',
          orderID: 'الطلب #{{trackingID}}',
          noRecord:
            'لا يمكن العثور على سجل لهذا الرقم التتبع في الوقت الحالي ، يرجى التحقق من الرقم والمحاولة مرة أخرى في وقت لاحق. لمزيد من المساعدة ، يرجى الاتصال بخدمة العملاء.',
        },
        orderDetails: {
          orderNumber: 'رقم الطلب',
          returnedToShipper: 'تم إعادة الطلب إلى الشحن',
          delivered: 'تم توصيل الطلب',
          cancelled: 'تم إلغاء الطلب',
          lastUpdated: 'آخر تحديث',
          merchantName: 'اسم التاجر',
          deliveryDate: 'تاريخ التوصيل',
        },
        deliveryBar: {
          orderCreated: 'تم إنشاء الطلب',
          orderReceived: 'تم استلام الطلب من التاجر',
          outForDelivery: 'الطلب خارج للتوصيل',
          orderDelivered: 'تم توصيل الطلب',
        },
        orderTable: {
          orderCreated: 'تم إنشاء الطلب',
          orderReceived: 'تم استلام الطلب من التاجر',
          outForDelivery: 'الطلب خارج للتوصيل',
          orderDelivered: 'تم توصيل الطلب',
          orderDeliveredToSender: 'تم توصيل الطلب إلى المُرسِل',
          orderCancelled: 'تم إلغاء الطلب',
          waitingForCustomerAction: 'في انتظار رد العميل',
          orderDetails: 'تفاصيل الطلب',
          details: 'التفاصيل',
          date: 'التاريخ',
          time: 'الوقت',
          reason: 'السبب',
          deliveryAddress: 'عنوان التسليم',
          anyProblems: 'هل لديك مشاكل مع طلبك؟!',
          reportProblem: 'الإبلاغ عن المشكلة',
          address: '20 شارع 66، القاهرة الجديدة 1، محافظة القاهرة 4723412',
          reasonText: {
            'Retry delivery - the customer is not in the address.':
              'إعادة محاولة التسليم - العميل غير متواجد على العنوان.',
            'Postponed - the customer requested postponement for another day.':
              'مؤجل - طلب العميل تأجيل التسليم إلى يوم آخر.',
            'Customer is not answering.': 'العميل لا يرد على الاتصال.',
          },
        },
      },
    },
  },
});

export default i18n;
