import { type Language as LanguageCode } from "@/app/i18n/resources.generated";
import { type LessonId } from "./lesson";

export type StudyId = string; // TODO crypto.randomUUID()

export interface Study {
  id: StudyId;
  languageId: LanguageCode;
  lessonId: LessonId;
}
