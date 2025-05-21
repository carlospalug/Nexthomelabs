"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n';
import { 
  detectUserLanguage, 
  saveLanguagePreference, 
  getLanguagePreference,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE
} from '@/lib/location';

type LanguageContextType = {
  language: string;
  changeLanguage: (language: string) => Promise<boolean>;
  isLoading: boolean;
  supportedLanguages: string[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initLanguage = async () => {
      try {
        // First check for an existing preference
        const savedLanguage = getLanguagePreference();
        
        if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
          await i18n.changeLanguage(savedLanguage);
          setLanguage(savedLanguage);
          document.documentElement.lang = savedLanguage;
        } else {
          // Detect user language based on browser and location
          const detectedLanguage = await detectUserLanguage();
          await i18n.changeLanguage(detectedLanguage);
          setLanguage(detectedLanguage);
          document.documentElement.lang = detectedLanguage;
          
          // Save the detected language as a preference
          saveLanguagePreference(detectedLanguage);
        }
      } catch (error) {
        console.error("Error setting up language:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    initLanguage();
  }, []);

  const changeLanguage = async (newLanguage: string) => {
    if (SUPPORTED_LANGUAGES.includes(newLanguage)) {
      try {
        await i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
        document.documentElement.lang = newLanguage;
        saveLanguagePreference(newLanguage);
        return true;
      } catch (error) {
        console.error("Failed to change language:", error);
        return false;
      }
    }
    return false;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        changeLanguage, 
        isLoading,
        supportedLanguages: SUPPORTED_LANGUAGES
      }}
    >
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}