import React, { useEffect, useState } from 'react';
import * as Localization from 'expo-localization';
import * as SecureStore from 'expo-secure-store';
import { LanguageProvider as BaseLanguageProvider } from '@tripoli-pulse/hooks';

type Language = 'en' | 'ar';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Language>('en');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initLocale() {
      try {
        const savedLocale = await SecureStore.getItemAsync('language');
        if (savedLocale === 'en' || savedLocale === 'ar') {
          setLocale(savedLocale);
        } else {
          const deviceLocales = Localization.getLocales();
          const deviceLang = deviceLocales[0]?.languageCode;
          setLocale(deviceLang === 'ar' ? 'ar' : 'en');
        }
      } catch (error) {
        console.warn('Failed to detect/load locale preference', error);
      } finally {
        setLoading(false);
      }
    }
    initLocale();
  }, []);

  const handleLanguageChange = async (newLang: Language) => {
    try {
      await SecureStore.setItemAsync('language', newLang);
    } catch (error) {
      console.warn('Failed to save language preference', error);
    }
  };

  if (loading) {
    return null; // Or custom loading spinner
  }

  return (
    <BaseLanguageProvider initialLang={locale} onLanguageChange={handleLanguageChange}>
      {children}
    </BaseLanguageProvider>
  );
}
