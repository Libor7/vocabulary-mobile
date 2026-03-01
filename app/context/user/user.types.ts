import type { User, UserId } from "@/app/models/user.model";

export type UserState = {
  users: User[];
  currentUserId: UserId | null;
};

export const ACTION_TYPES = {
  BOOTSTRAP_USERS: "BOOTSTRAP_USERS",
  CREATE_USER: "CREATE_USER",
  SELECT_USER: "SELECT_USER",
  DELETE_USER: "DELETE_USER",
  CREATE_COURSE: "CREATE_COURSE",
  DELETE_COURSE: "DELETE_COURSE",
  ANSWER_WORD: "ANSWER_WORD",
  TOGGLE_REVIEW: "TOGGLE_REVIEW",
} as const;
