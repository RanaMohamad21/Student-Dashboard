import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Initialize i18n
i18n
  .use(Backend) // Load translation files from the server or local storage
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // React bindings
  .init({
    // lng: "en",
    fallbackLng: "en", // Default language if detection fails
    debug: true, // Set to false in production
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Set to false to avoid suspense for translation loading
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // Path to the translation files
    },
  });

export default i18n;
