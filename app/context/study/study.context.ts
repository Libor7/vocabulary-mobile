import { createContext } from "use-context-selector";
import type { StudyAction } from "./study.actions";
import type { StudyState } from "./study.types";

export interface StudyContextValue {
  state: StudyState;
  dispatch: React.Dispatch<StudyAction>;
}

export const StudyContext = createContext<StudyContextValue | undefined>(undefined);
