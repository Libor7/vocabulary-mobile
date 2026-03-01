import type { Course, CourseId } from "@/app/models/course.model";
import type { User, UserId } from "@/app/models/user.model";
import type { TranslationKey } from "@/app/models/word.model";
import { ACTION_TYPES } from "./user.types";

export type BootstrapUsersAction = {
  type: typeof ACTION_TYPES.BOOTSTRAP_USERS;
  payload: { users: User[] };
};

export type CreateUserAction = {
  type: typeof ACTION_TYPES.CREATE_USER;
  payload: { user: User };
};

export type SelectUserAction = {
  type: typeof ACTION_TYPES.SELECT_USER;
  payload: { userId: UserId };
};

export type DeleteUserAction = {
  type: typeof ACTION_TYPES.DELETE_USER;
  payload: { userId: UserId };
};

export type CreateCourseAction = {
  type: typeof ACTION_TYPES.CREATE_COURSE;
  payload: { userId: UserId; course: Course };
};

export type DeleteCourseAction = {
  type: typeof ACTION_TYPES.DELETE_COURSE;
  payload: { userId: UserId; courseId: CourseId };
};

export type AnswerWordAction = {
  type: typeof ACTION_TYPES.ANSWER_WORD;
  payload: { userId: UserId; courseId: CourseId; wordId: TranslationKey; isCorrect: boolean };
};

export type ToggleReviewAction = {
  type: typeof ACTION_TYPES.TOGGLE_REVIEW;
  payload: { userId: UserId; courseId: CourseId; wordId: TranslationKey };
};

export type UserAction =
  | BootstrapUsersAction
  | CreateUserAction
  | SelectUserAction
  | DeleteUserAction
  | CreateCourseAction
  | DeleteCourseAction
  | AnswerWordAction
  | ToggleReviewAction;
