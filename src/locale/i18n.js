import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translations from './translations';

i18n
.use(initReactI18next)
.init({
  compatibilityJSON: 'v3',
  resources: translations,
  lng: 'hy',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
