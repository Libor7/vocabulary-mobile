import { useContextSelector } from "use-context-selector";

import type { User } from "@/app/models/user.model";
import { type UserContextValue, UserContext } from "./user.context";

const useUserContext = <T>(selector: (ctx: UserContextValue) => T): T =>
  useContextSelector(UserContext, (ctx) => {
    if (!ctx) {
      throw new Error("useUserContext must be used within UserProvider");
    }
    return selector(ctx);
  });

export const useUsers = (): User[] => useUserContext(({ state }) => state.users);

export const useCurrentUser = (): User | null =>
  useUserContext(({ state }) => state.users.find((u) => u.id === state.currentUserId) ?? null);

export const useUserDispatch = () => useUserContext(({ dispatch }) => dispatch);
