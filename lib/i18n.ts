"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './location';

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

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: DEFAULT_LANGUAGE, // Default language
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

export default i18n;