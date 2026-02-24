import type { CourseId } from "@/app/models/course.model";

export type StudyState = {
  activeCourseId: CourseId | null;
};

export const ACTION_TYPES = {
  SELECT_COURSE: "SELECT_COURSE",
} as const;
