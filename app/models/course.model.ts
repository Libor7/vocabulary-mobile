import { type Language as LanguageCode } from "@/app/i18n/resources.generated";
import { type LessonId } from "./lesson.model";
import { type TranslationKey } from "./word.model";

export type CourseId = string; // crypto.randomUUID()

export interface Course {
  id: CourseId;
  language: LanguageCode;
  markedForReview: TranslationKey[];
  progress: LessonProgress | null;
  score: number;
  createdAt: number;
}

export interface LessonProgress {
  activeLesson: LessonId;
  words: Record<TranslationKey, WordProgress>;
}

export interface WordProgress {
  attemptsLeft: number;
  correctlyAnswered: boolean;
}
