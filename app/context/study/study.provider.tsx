import { type PropsWithChildren, useReducer } from "react";

import { StudyContext } from "./study.context";
import { studyReducer } from "./study.reducer";
import type { StudyState } from "./study.types";

const initialState: StudyState = {
  activeCourseId: null,
};

export const StudyProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(studyReducer, initialState);

  return <StudyContext.Provider value={{ state, dispatch }}>{children}</StudyContext.Provider>;
};
