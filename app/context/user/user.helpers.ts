import type { Course, CourseId } from "@/app/models/course.model";
import type { User, UserId } from "@/app/models/user.model";
import type { TranslationKey } from "@/app/models/word.model";

export const updateUser = (
  users: User[],
  userId: UserId,
  updater: (user: User) => User,
): User[] => {
  return users.map((u) => (u.id === userId ? updater(u) : u));
};

export const updateCourse = (
  courses: Course[],
  courseId: CourseId,
  updater: (course: Course) => Course,
): Course[] => {
  return courses.map((c) => (c.id === courseId ? updater(c) : c));
};

export const updateWord = (
  course: Course,
  wordId: TranslationKey,
  updater: (word: Course["words"][TranslationKey]) => Course["words"][TranslationKey],
): Course => {
  const currentWord = course.words[wordId];

  if (!currentWord) return course;

  return {
    ...course,
    words: {
      ...course.words,
      [wordId]: updater(currentWord),
    },
  };
};

export const decrementAttempts = (value: number): number => Math.max(value - 1, 0);
