"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import i18n from './i18n';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, saveLanguagePreference } from './location';
import Cookies from 'js-cookie';

// Type definitions
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, options?: any) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: (key: string) => key,
});

// Helper function to get language from various sources
const getInitialLanguage = (): string => {
  // Try to get from HTML lang attribute
  if (typeof document !== 'undefined') {
    const htmlLang = document.documentElement.lang;
    if (htmlLang && SUPPORTED_LANGUAGES.includes(htmlLang)) {
      return htmlLang;
    }
  }

  // Try to get from cookie
  const cookieLang = Cookies.get('NEXT_LOCALE');
  if (cookieLang && SUPPORTED_LANGUAGES.includes(cookieLang)) {
    return cookieLang;
  }

  // Fallback to browser language or default
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0];
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      return browserLang;
    }
  }

  return DEFAULT_LANGUAGE;
};

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<string>(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize language on component mount
  useEffect(() => {
    const initialLang = getInitialLanguage();
    
    // Load translations for the initial language
    const loadTranslations = async (lang: string) => {
      try {
        // Import translations dynamically based on language
        const module = await import(`../public/locales/${lang}/common.json`);
        setTranslations(module.default);
        
        // Update i18n instance
        i18n.changeLanguage(lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        setLanguageState(lang);
        setIsLoaded(true);
      } catch (error) {
        console.error(`Failed to load translations for ${lang}:`, error);
        
        // Fallback to default language if translations can't be loaded
        if (lang !== DEFAULT_LANGUAGE) {
          loadTranslations(DEFAULT_LANGUAGE);
        } else {
          setIsLoaded(true);
        }
      }
    };
    
    loadTranslations(initialLang);
  }, []);

  // Function to change language
  const setLanguage = async (lang: string) => {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    
    try {
      // Import translations for the selected language
      const module = await import(`../public/locales/${lang}/common.json`);
      setTranslations(module.default);
      
      // Update i18n instance
      i18n.changeLanguage(lang);
      
      // Update HTML lang attribute
      document.documentElement.lang = lang;
      
      // Save preference in cookie
      saveLanguagePreference(lang);
      
      setLanguageState(lang);
    } catch (error) {
      console.error(`Failed to change language to ${lang}:`, error);
    }
  };

  // Translation function - get nested keys with dot notation
  const t = (key: string, options?: any): string => {
    if (!translations || !isLoaded) return key;
    
    // Split the key by dots to access nested properties
    const parts = key.split('.');
    let result = translations;
    
    // Navigate through the nested properties
    for (const part of parts) {
      if (result && typeof result === 'object' && part in result) {
        result = result[part];
      } else {
        return key; // Key not found, return the key itself
      }
    }
    
    // If the result is a string, return it
    return typeof result === 'string' ? result : key;
  };

  // Provide language context to all children
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}