import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { RU, UZ } from './locales';

i18n.use(initReactI18next).init({
  resources: {
    RU,
    UZ,
  },
  lng: localStorage.getItem('lang') || 'UZ',
  fallbackLng: localStorage.getItem('lang') || 'UZ',
  react: { useSuspense: true },
  interpolation: { escapeValue: false },
});

export default i18n;
