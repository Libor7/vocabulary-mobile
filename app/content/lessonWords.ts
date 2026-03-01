import { LESSON_WORDS } from "@/app/content/lessonWords.generated";
import { type LessonId } from "@/app/models/lesson.model";

export const getWordsForLesson = (lessonId: LessonId) => LESSON_WORDS[lessonId] ?? [];
