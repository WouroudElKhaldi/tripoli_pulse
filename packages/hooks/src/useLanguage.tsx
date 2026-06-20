"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@tripoli-pulse/constants';

type Language = 'en' | 'ar';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ 
  children, 
  initialLang,
  onLanguageChange
}: { 
  children: ReactNode;
  initialLang?: Language;
  onLanguageChange?: (lang: Language) => void;
}) {
  const [language, setLanguageState] = useState<Language>(initialLang || 'en');

  // Detect language on mount (browser context)
  useEffect(() => {
    if (!initialLang && typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang === 'en' || savedLang === 'ar') {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language.split('-')[0];
        const defaultLang = browserLang === 'ar' ? 'ar' : 'en';
        setLanguageState(defaultLang);
      }
    }
  }, [initialLang]);

  // Sync document direction and persist preference (web only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  }, [language, onLanguageChange]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (keyPath: string): string => {
    const keys = keyPath.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return keyPath; // Fallback to raw key if not found
      }
    }
    return typeof current === 'string' ? current : keyPath;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
