import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { type Language, resources, SUPPORTED_LANGUAGES } from "./resources.generated";

const deviceLanguage = Localization.getLocales()[0]?.languageCode ?? SUPPORTED_LANGUAGES[0];

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: SUPPORTED_LANGUAGES.includes(deviceLanguage as Language)
    ? deviceLanguage as Language
    : SUPPORTED_LANGUAGES[0],

  fallbackLng: SUPPORTED_LANGUAGES[0],

  ns: Object.keys(resources[SUPPORTED_LANGUAGES[0]]),
  defaultNS: "content",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
