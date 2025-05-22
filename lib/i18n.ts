"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './location';
import Cookies from 'js-cookie';

// Import translations
import enTranslation from '../public/locales/en/common.json';
import frTranslation from '../public/locales/fr/common.json';
import swTranslation from '../public/locales/sw/common.json';
import lgTranslation from '../public/locales/lg/common.json';

const resources = {
  en: { 
    common: enTranslation 
  },
  fr: { 
    common: frTranslation 
  },
  sw: { 
    common: swTranslation 
  },
  lg: { 
    common: lgTranslation 
  },
};

// Simplify language detection - avoid circular dependency issues
function getInitialLanguage(): string {
  // Try to get language from HTML
  if (typeof document !== 'undefined' && document.documentElement.lang) {
    const htmlLang = document.documentElement.lang;
    if (SUPPORTED_LANGUAGES.includes(htmlLang)) {
      return htmlLang;
    }
  }
  
  // Try to get from cookie
  try {
    if (typeof document !== 'undefined') {
      const cookieLang = Cookies.get('NEXT_LOCALE');
      if (cookieLang && SUPPORTED_LANGUAGES.includes(cookieLang)) {
        return cookieLang;
      }
    }
  } catch (error) {
    console.warn("Error getting language from cookie:", error);
  }
  
  // Default fallback
  return DEFAULT_LANGUAGE;
}

// Initialize i18next with simple initialization to avoid circular dependencies
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Required for server-side rendering
    },
  });

// Don't add complicated event listeners or language detection logic here
// Keep it simple to avoid circular references and hydration issues

export default i18n;