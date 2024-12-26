import { create } from "zustand";

interface RenameState {
  name: string;
  rename: (newName: string) => void;
}

export const useRename = create<RenameState>((set) => ({
  name: "",
  rename(newName: string) {
    set(() => ({ name: newName }));
  },
}));
