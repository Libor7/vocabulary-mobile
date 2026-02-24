import { useContextSelector } from "use-context-selector";

import type { CourseId } from "@/app/models/course.model";
import { type StudyContextValue, StudyContext } from "./study.context";

const useStudyContext = <T>(selector: (ctx: StudyContextValue) => T): T =>
  useContextSelector(StudyContext, (ctx) => {
    if (!ctx) {
      throw new Error("useStudyContext must be used within StudyProvider");
    }
    return selector(ctx);
  });

export const useActiveCourseId = (): CourseId | null =>
  useStudyContext(({ state }) => state.activeCourseId);

export const useStudyDispatch = () => useStudyContext(({ dispatch }) => dispatch);
