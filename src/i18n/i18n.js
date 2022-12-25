import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import translationEN from './en.json';
import translationAR from './ar.json'
const resources = {
    en: {
      translation: translationEN
    },
    ar: {
      translation: translationAR
    }
  };

i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    debug: true,

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;