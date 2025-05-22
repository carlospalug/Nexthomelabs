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

// Get initial language from HTML or cookie
let initialLanguage = DEFAULT_LANGUAGE;
if (typeof document !== 'undefined') {
  // First try to get from HTML lang attribute
  if (document.documentElement.lang) {
    initialLanguage = document.documentElement.lang;
  } 
  // Then try to get from cookie
  else {
    const cookieLang = Cookies.get('NEXT_LOCALE');
    if (cookieLang && SUPPORTED_LANGUAGES.includes(cookieLang)) {
      initialLanguage = cookieLang;
    }
  }
}

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage, // Use detected language
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

// Listen for language changes
if (typeof window !== 'undefined') {
  const htmlObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
        const newLang = document.documentElement.lang;
        if (newLang && newLang !== i18n.language && SUPPORTED_LANGUAGES.includes(newLang)) {
          i18n.changeLanguage(newLang);
        }
      }
    });
  });
  
  htmlObserver.observe(document.documentElement, { attributes: true });
}

export default i18n;