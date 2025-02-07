import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 直接导入 YAML 文件
import zhTranslation from './locales/zh.yaml';
import enTranslation from './locales/en.yaml';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    parseMissingKeyHandler: (key, defaultValue) => {
      console.log(`Missing key: ${key}, default value: ${defaultValue}`);
      return '';
    },
    resources: {
      zh: {
        translation: zhTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    fallbackLng: 'zh',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 