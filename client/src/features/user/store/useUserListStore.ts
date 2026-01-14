import { create } from 'zustand'
import type { User } from '../../../shared/types/user.type';

type UserState = {
  userList: User[];
  userStrokeColors: Map<string, string>;
}

type UserAction = {
  setUserList: (users: User[]) => void,
  setUserStrokeColor: (userId: string, color: string) => void,
};

export const useUserListStore = create<UserState & UserAction>((set) => ({
  userList: [],
  userStrokeColors: new Map(),
  setUserList: (userList) => set({ userList }),
  setUserStrokeColor: (userId, color) => set((state) => {
    const newColors = new Map(state.userStrokeColors);
    newColors.set(userId, color);
    return { userStrokeColors: newColors };
  }),
}));