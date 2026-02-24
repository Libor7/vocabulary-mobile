import type { Course, CourseId } from "@/app/models/course.model";
import type { TranslationKey } from "@/app/models/word.model";
import { useCurrentUser, useUserDispatch } from "../user/user.selectors";
import { ACTION_TYPES as USER_TYPES } from "../user/user.types";
import { useActiveCourseId, useStudyDispatch } from "./study.selectors";
import { ACTION_TYPES as STUDY_TYPES } from "./study.types";

export const useStudyActions = () => {
  const userDispatch = useUserDispatch();
  const studyDispatch = useStudyDispatch();
  const currentUser = useCurrentUser();
  const activeCourseId = useActiveCourseId();

  const createCourse = (course: Course) => {
    if (!currentUser) return;

    userDispatch({ type: USER_TYPES.CREATE_COURSE, payload: { userId: currentUser.id, course } });
  };

  const answerWord = (wordId: TranslationKey, isCorrect: boolean) => {
    if (!currentUser || !activeCourseId) return;

    userDispatch({
      type: USER_TYPES.ANSWER_WORD,
      payload: { userId: currentUser.id, courseId: activeCourseId, wordId, isCorrect },
    });
  };

  const selectCourse = (courseId: CourseId) => {
    studyDispatch({ type: STUDY_TYPES.SELECT_COURSE, payload: { courseId } });
  };

  const toggleReview = (wordId: TranslationKey) => {
    if (!currentUser || !activeCourseId) return;

    userDispatch({
      type: USER_TYPES.TOGGLE_REVIEW,
      payload: { userId: currentUser.id, courseId: activeCourseId, wordId },
    });
  };

  return { createCourse, answerWord, selectCourse, toggleReview };
};
