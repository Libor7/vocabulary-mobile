export type LessonId = number;

export interface Lesson {
  id: LessonId;
  order: number;
  titleKey: string;
}
