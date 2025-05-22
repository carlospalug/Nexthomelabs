import Cookies from 'js-cookie';

// Cookie names
export const LANGUAGE_COOKIE_NAME = 'NEXT_LOCALE';
export const LOCATION_COOKIE_NAME = 'USER_LOCATION';

// Language mapping by country code
export const COUNTRY_LANGUAGE_MAP: Record<string, string> = {
  // Africa
  'UG': 'en', // Uganda
  'KE': 'en', // Kenya
  'TZ': 'en', // Tanzania
  'RW': 'en', // Rwanda
  'BI': 'fr', // Burundi
  'CD': 'fr', // Democratic Republic of the Congo
  'DJ': 'fr', // Djibouti
  'MG': 'fr', // Madagascar
  'MU': 'fr', // Mauritius
  'SC': 'fr', // Seychelles
  'CM': 'fr', // Cameroon
  'CI': 'fr', // Côte d'Ivoire
  'SN': 'fr', // Senegal
  'BF': 'fr', // Burkina Faso
  'BJ': 'fr', // Benin
  'NE': 'fr', // Niger
  'ML': 'fr', // Mali
  'TG': 'fr', // Togo
  'GA': 'fr', // Gabon
  'CG': 'fr', // Republic of the Congo
  'MA': 'fr', // Morocco
  'DZ': 'fr', // Algeria
  'TN': 'fr', // Tunisia

  // Rest of the world (examples)
  'FR': 'fr', // France
  'DE': 'de', // Germany
  'ES': 'es', // Spain
  'IT': 'it', // Italy
  'PT': 'pt', // Portugal
  'BR': 'pt', // Brazil
  'AO': 'pt', // Angola
  'MZ': 'pt', // Mozambique
};

// Supported languages
export const SUPPORTED_LANGUAGES = ['en', 'fr', 'sw', 'lg'];
export const DEFAULT_LANGUAGE = 'en';

// Function to get browser language
export function getBrowserLanguage(): string {
  if (typeof window !== 'undefined') {
    const navigatorLanguage = navigator.language.split('-')[0];
    return SUPPORTED_LANGUAGES.includes(navigatorLanguage) ? navigatorLanguage : DEFAULT_LANGUAGE;
  }
  return DEFAULT_LANGUAGE;
}

// Function to get user location using browser's geolocation API
export function getUserLocationFromBrowser(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const countryCode = await getCountryFromCoordinates(latitude, longitude);
            resolve(countryCode);
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
          reject(error);
        },
        { timeout: 5000, maximumAge: 24 * 60 * 60 * 1000 } // 24 hour cache
      );
    } else {
      reject(new Error('Geolocation not supported'));
    }
  });
}

// Function to get user location using IP geolocation
export async function getUserLocationFromIP(): Promise<string> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    console.error('Error getting location from IP:', error);
    return '';
  }
}

// Function to get country from coordinates using reverse geocoding
async function getCountryFromCoordinates(latitude: number, longitude: number): Promise<string> {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    const data = await response.json();
    return data.countryCode;
  } catch (error) {
    console.error('Error with reverse geocoding:', error);
    return '';
  }
}

// Function to get preferred language based on location
export function getLanguageFromLocation(countryCode: string): string {
  return COUNTRY_LANGUAGE_MAP[countryCode] || DEFAULT_LANGUAGE;
}

// Function to save the user's language preference
export function saveLanguagePreference(language: string): void {
  try {
    if (SUPPORTED_LANGUAGES.includes(language)) {
      Cookies.set(LANGUAGE_COOKIE_NAME, language, { expires: 365, path: '/' });
      console.log(`Language preference saved: ${language}`);
    }
  } catch (error) {
    console.error('Error saving language preference:', error);
  }
}

// Function to save the user's detected location
export function saveUserLocation(countryCode: string): void {
  try {
    Cookies.set(LOCATION_COOKIE_NAME, countryCode, { expires: 7, path: '/' });
  } catch (error) {
    console.error('Error saving user location:', error);
  }
}

// Function to get the language preference from cookie
export function getLanguagePreference(): string | undefined {
  try {
    return Cookies.get(LANGUAGE_COOKIE_NAME);
  } catch (error) {
    console.error('Error getting language preference:', error);
    return undefined;
  }
}

// Function to get the stored user location from cookie
export function getSavedUserLocation(): string | undefined {
  try {
    return Cookies.get(LOCATION_COOKIE_NAME);
  } catch (error) {
    console.error('Error getting saved user location:', error);
    return undefined;
  }
}

// Main function to detect user language
export async function detectUserLanguage(): Promise<string> {
  try {
    // First check if the user has a saved preference
    const savedLanguage = getLanguagePreference();
    if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      return savedLanguage;
    }

    // If the document is available, check the html lang attribute
    if (typeof document !== 'undefined' && document.documentElement.lang) {
      const htmlLang = document.documentElement.lang;
      if (SUPPORTED_LANGUAGES.includes(htmlLang)) {
        return htmlLang;
      }
    }

    // Try to get location from cookie
    const savedLocation = getSavedUserLocation();
    if (savedLocation) {
      const language = getLanguageFromLocation(savedLocation);
      if (language) return language;
    }

    // Try to get location from browser geolocation
    try {
      const countryCode = await getUserLocationFromBrowser();
      if (countryCode) {
        saveUserLocation(countryCode);
        const language = getLanguageFromLocation(countryCode);
        if (language) return language;
      }
    } catch (error) {
      console.warn('Error getting browser geolocation:', error);
    }

    // Fallback to IP geolocation
    try {
      const countryCode = await getUserLocationFromIP();
      if (countryCode) {
        saveUserLocation(countryCode);
        const language = getLanguageFromLocation(countryCode);
        if (language) return language;
      }
    } catch (error) {
      console.warn('Error getting IP geolocation:', error);
    }

    // Last resort: use browser language
    return getBrowserLanguage();
  } catch (error) {
    console.error('Error in detectUserLanguage:', error);
    return DEFAULT_LANGUAGE;
  }
}