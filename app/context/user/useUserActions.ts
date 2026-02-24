import type { CourseId } from "@/app/models/course.model";
import type { User, UserId } from "@/app/models/user.model";
import { useActiveCourseId, useStudyDispatch } from "../study/study.selectors";
import { ACTION_TYPES as STUDY_TYPES } from "../study/study.types";
import { useUserDispatch } from "./user.selectors";
import { ACTION_TYPES as USER_TYPES } from "./user.types";

export const useUserActions = () => {
  const userDispatch = useUserDispatch();
  const studyDispatch = useStudyDispatch();
  const activeCourseId = useActiveCourseId();

  const createUser = (user: User) => {
    userDispatch({
      type: USER_TYPES.CREATE_USER,
      payload: { user },
    });
  };

  const selectUser = (userId: UserId) => {
    userDispatch({
      type: USER_TYPES.SELECT_USER,
      payload: { userId },
    });
  };

  const deleteUser = (userId: UserId) => {
    userDispatch({
      type: USER_TYPES.DELETE_USER,
      payload: { userId },
    });
  };

  const deleteCourse = (userId: UserId, courseId: CourseId) => {
    userDispatch({
      type: USER_TYPES.DELETE_COURSE,
      payload: { userId, courseId },
    });

    if (activeCourseId === courseId) {
      studyDispatch({
        type: STUDY_TYPES.SELECT_COURSE,
        payload: { courseId: null },
      });
    }
  };

  return {
    createUser,
    selectUser,
    deleteUser,
    deleteCourse,
  };
};
