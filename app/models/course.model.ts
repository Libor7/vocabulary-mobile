import { type Language as LanguageCode } from "@/app/i18n/resources.generated";
import { type LessonId } from "./lesson.model";
import { type TranslationKey } from "./word.model";

export type CourseId = string; // crypto.randomUUID()

export interface WordState {
  attemptsLeft: number;
  correctlyAnswered: boolean;
  markedForReview: boolean;
}

export interface Course {
  id: CourseId;
  language: LanguageCode;
  score: number;
  activeLesson: LessonId;
  words: Record<TranslationKey, WordState>;
  createdAt: number;
}
