export const translations = {
  en: {
    common: {
      appName: 'Tripoli Pulse AI',
      loading: 'Loading...',
      error: 'An error occurred',
      submit: 'Submit',
      cancel: 'Cancel',
      language: 'Language',
      theme: 'Theme',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
    },
    website: {
      welcome: 'Welcome to Tripoli Pulse AI',
      subtitle: 'The Intelligent Operating System for the City of Tripoli',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
    },
    dashboard: {
      title: 'Municipality Dashboard',
      overview: 'Overview Metrics',
      reports: 'Reports',
      mapCenter: 'Map Center',
      analytics: 'Analytics',
    },
    mobile: {
      reportIssue: 'Report an Issue',
      activeReports: 'My Active Reports',
      neighborhoodScore: 'Neighborhood Score',
      aiAssistant: 'AI Urban Copilot',
    },
  },
  ar: {
    common: {
      appName: 'نبض طرابلس الذكي',
      loading: 'جاري التحميل...',
      error: 'حدث خطأ ما',
      submit: 'إرسال',
      cancel: 'إلغاء',
      language: 'اللغة',
      theme: 'المظهر',
      darkMode: 'الوضع الداكن',
      lightMode: 'الوضع الفاتح',
    },
    website: {
      welcome: 'مرحبًا بكم في نبض طرابلس الذكي',
      subtitle: 'نظام التشغيل الذكي لمدينة طرابلس',
      getStarted: 'ابدأ الآن',
      learnMore: 'معرفة المزيد',
    },
    dashboard: {
      title: 'لوحة التحكم البلدية',
      overview: 'المؤشرات العامة',
      reports: 'التقارير',
      mapCenter: 'مركز الخرائط',
      analytics: 'التحليلات',
    },
    mobile: {
      reportIssue: 'الإبلاغ عن مشكلة',
      activeReports: 'تقاريري النشطة',
      neighborhoodScore: 'تقييم الحي',
      aiAssistant: 'مساعد الذكاء الاصطناعي الحضري',
    },
  },
} as const;

export type TranslationKeys = typeof translations;
