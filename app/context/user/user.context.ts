import { createContext } from "use-context-selector";

import type { UserAction } from "./user.actions";
import type { UserState } from "./user.types";

export interface UserContextValue {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextValue | undefined>(undefined);
