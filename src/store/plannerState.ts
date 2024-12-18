import { create } from "zustand";

interface ChangeState {
  isConfirm: boolean;
  changeConfirm: () => void;
}

export const useChangeState = create<ChangeState>((set, get) => ({
  isConfirm: false,
  changeConfirm: () => {
    set(() => ({ isConfirm: !get().isConfirm }));
  },
}));
