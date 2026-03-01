import type { User } from "@/app/models/user.model";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_PREFIX = "@vocabulary:user";
const INDEX_KEY = "@vocabulary:users:index";
const STORAGE_VERSION = 1;

export interface PersistedUser {
  version: number;
  user: User;
}

const buildUserKey = (userId: string) => `${STORAGE_PREFIX}:${userId}`;

export const saveUserIndex = async (userIds: string[]): Promise<void> => {
  await AsyncStorage.setItem(INDEX_KEY, JSON.stringify(userIds));
};

export const loadUserIndex = async (): Promise<string[]> => {
  const raw = await AsyncStorage.getItem(INDEX_KEY);
  if (!raw) return [];
  return JSON.parse(raw) as string[];
};

export const saveUserToStorage = async (user: User): Promise<void> => {
  const payload: PersistedUser = {
    version: STORAGE_VERSION,
    user,
  };

  await AsyncStorage.setItem(buildUserKey(user.id), JSON.stringify(payload));
};

export const loadUserFromStorage = async (userId: string): Promise<User | null> => {
  const raw = await AsyncStorage.getItem(buildUserKey(userId));
  if (!raw) return null;

  const parsed = JSON.parse(raw) as PersistedUser;

  if (parsed.version !== STORAGE_VERSION) {
    return null;
  }

  return parsed.user;
};

export const deleteUserFromStorage = async (userId: string): Promise<void> => {
  await AsyncStorage.removeItem(buildUserKey(userId));
};
