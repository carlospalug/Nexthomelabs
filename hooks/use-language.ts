"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  detectUserLanguage, 
  saveLanguagePreference, 
  getLanguagePreference,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE
} from '@/lib/location';

export function useLanguage() {
  const { i18n } = useTranslation();
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
  }, [i18n]);

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

  return {
    language,
    changeLanguage,
    isLoading,
    supportedLanguages: SUPPORTED_LANGUAGES
  };
}