import { type Language as LanguageCode } from "@/app/i18n/resources.generated";

export type UserId = string; // TODO crypto.randomUUID()

export interface User {
  id: UserId;
  name: string;
  nativeLanguage: LanguageCode;
}
