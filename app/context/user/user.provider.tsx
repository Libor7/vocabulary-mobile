import { type PropsWithChildren, useEffect, useReducer, useRef, useState } from "react";
import { UserContext } from "./user.context";
import { userReducer } from "./user.reducer";
import {
  deleteUserFromStorage,
  loadUserFromStorage,
  loadUserIndex,
  saveUserIndex,
  saveUserToStorage,
} from "./user.storage";
import { ACTION_TYPES, type UserState } from "./user.types";

const initialState: UserState = {
  users: [],
  currentUserId: null,
};

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [isBootstrapped, setIsBootstrapped] = useState(false);
  const previousUserIdsRef = useRef<string[]>([]);

  useEffect(() => {
    const bootstrap = async () => {
      const userIds = await loadUserIndex();
      const users = await Promise.all(userIds.map((id) => loadUserFromStorage(id)));
      const filteredUsers = users.filter((u): u is NonNullable<typeof u> => u !== null);
      dispatch({ type: ACTION_TYPES.BOOTSTRAP_USERS, payload: { users: filteredUsers } });
      setIsBootstrapped(true);
    };

    bootstrap();
  }, []);

  useEffect(() => {
    if (!isBootstrapped) return;

    const persist = async () => {
      const currentUserIds = state.users.map((u) => u.id);
      const previousUserIds = previousUserIdsRef.current;

      const deletedUserIds = previousUserIds.filter((id) => !currentUserIds.includes(id));

      await Promise.all(deletedUserIds.map(deleteUserFromStorage));
      await saveUserIndex(currentUserIds);
      await Promise.all(state.users.map((user) => saveUserToStorage(user)));
      previousUserIdsRef.current = currentUserIds;
    };

    persist();
  }, [state.users, isBootstrapped]);

  if (!isBootstrapped) return null;

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
