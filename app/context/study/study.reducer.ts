import type { StudyAction } from "./study.actions";
import { ACTION_TYPES, type StudyState } from "./study.types";

export const studyReducer = (state: StudyState, { payload, type }: StudyAction): StudyState => {
  switch (type) {
    case ACTION_TYPES.SELECT_COURSE:
      return {
        ...state,
        activeCourseId: payload.courseId,
      };

    default:
      return state;
  }
};
