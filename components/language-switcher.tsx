import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Check, Globe } from 'lucide-react';
import { saveLanguagePreference, SUPPORTED_LANGUAGES } from '@/lib/location';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';

const languageNames: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  sw: 'Kiswahili',
  lg: 'Luganda',
};

export function LanguageSwitcher() {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const { i18n } = useTranslation();

  // Get current language from cookie when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get language from either i18n or the html lang attribute
      const htmlLang = document.documentElement.lang;
      const lang = i18n.language || htmlLang || 'en';
      setCurrentLanguage(lang);
    }
  }, [i18n.language]);

  const handleLanguageChange = (language: string) => {
    // Save language preference
    saveLanguagePreference(language);
    
    // Change i18n language
    i18n.changeLanguage(language);
    
    // Set HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
    
    // Update state
    setCurrentLanguage(language);
    
    // Refresh the page to apply the language change
    // We add a small delay to ensure the cookie is set
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative rounded-full overflow-hidden hover:bg-[#00E6E6]/10"
          aria-label="Change language"
        >
          <Globe className="h-5 w-5 text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border border-[#00E6E6]/20 bg-black/90 backdrop-blur-sm">
        {SUPPORTED_LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language}
            className={`flex items-center gap-2 cursor-pointer ${
              language === currentLanguage ? 'bg-[#00E6E6]/10' : ''
            }`}
            onClick={() => handleLanguageChange(language)}
          >
            {language === currentLanguage && (
              <Check className="h-4 w-4 text-[#00E6E6]" />
            )}
            <span className={language === currentLanguage ? 'text-[#00E6E6]' : ''}>
              {languageNames[language]}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}