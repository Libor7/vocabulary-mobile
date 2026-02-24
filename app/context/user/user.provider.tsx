import { type PropsWithChildren, useReducer } from "react";

import { UserContext } from "./user.context";
import { userReducer } from "./user.reducer";
import type { UserState } from "./user.types";

const initialState: UserState = {
  users: [],
  currentUserId: null,
};

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
