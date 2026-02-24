import type { CourseId } from "@/app/models/course.model";
import { ACTION_TYPES } from "./study.types";

export type SelectCourseAction = {
  type: typeof ACTION_TYPES.SELECT_COURSE;
  payload: {
    courseId: CourseId | null;
  };
};

export type StudyAction = SelectCourseAction;
