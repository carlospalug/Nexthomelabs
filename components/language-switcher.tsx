"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Globe } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '@/lib/location';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/lib/language-context';

const languageNames: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  sw: 'Kiswahili',
  lg: 'Luganda',
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

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
        {SUPPORTED_LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang}
            className={`flex items-center gap-2 cursor-pointer ${
              lang === language ? 'bg-[#00E6E6]/10' : ''
            }`}
            onClick={() => setLanguage(lang)}
          >
            {lang === language && (
              <Check className="h-4 w-4 text-[#00E6E6]" />
            )}
            <span className={lang === language ? 'text-[#00E6E6]' : ''}>
              {languageNames[lang]}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}