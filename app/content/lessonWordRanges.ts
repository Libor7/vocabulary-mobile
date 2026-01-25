import { type LessonId } from "@/app/models/lesson";

export const LESSON_WORD_RANGES: Record<
  LessonId,
  { startIndex: number; wordCount: number }
> = {
  1: { startIndex: 0, wordCount: 2 },
  2: { startIndex: 2, wordCount: 1 },
} as const;
