import type { UserAction } from "./user.actions";
import { decrementAttempts, updateCourse, updateUser, updateWord } from "./user.helpers";
import { ACTION_TYPES, type UserState } from "./user.types";

export const userReducer = (state: UserState, { payload, type }: UserAction): UserState => {
  switch (type) {
    case ACTION_TYPES.CREATE_USER:
      return {
        ...state,
        users: [...state.users, payload.user],
      };

    case ACTION_TYPES.SELECT_USER:
      return {
        ...state,
        currentUserId: payload.userId,
      };

    case ACTION_TYPES.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((u) => u.id !== payload.userId),
        currentUserId: state.currentUserId === payload.userId ? null : state.currentUserId,
      };

    case ACTION_TYPES.CREATE_COURSE:
      return {
        ...state,
        users: updateUser(state.users, payload.userId, (user) => ({
          ...user,
          courses: [...user.courses, payload.course],
        })),
      };

    case ACTION_TYPES.DELETE_COURSE:
      return {
        ...state,
        users: updateUser(state.users, payload.userId, (user) => ({
          ...user,
          courses: user.courses.filter((c) => c.id !== payload.courseId),
        })),
      };

    case ACTION_TYPES.ANSWER_WORD:
      return {
        ...state,
        users: updateUser(state.users, payload.userId, (user) => ({
          ...user,
          courses: updateCourse(user.courses, payload.courseId, (course) =>
            updateWord(course, payload.wordId, (word) => ({
              ...word,
              correctlyAnswered: payload.isCorrect,
              attemptsLeft: decrementAttempts(word.attemptsLeft),
            })),
          ),
        })),
      };

    case ACTION_TYPES.TOGGLE_REVIEW:
      return {
        ...state,
        users: updateUser(state.users, payload.userId, (user) => ({
          ...user,
          courses: updateCourse(user.courses, payload.courseId, (course) =>
            updateWord(course, payload.wordId, (word) => ({
              ...word,
              markedForReview: !word.markedForReview,
            })),
          ),
        })),
      };

    default:
      return state;
  }
};
