import { create } from "zustand";

interface dataForm {
  data: object[];
  setData: (newItem: object) => void;
}

export const useData = create<dataForm>((set) => ({
  data: [],
  setData: (newItem: object) =>
    set((state) => ({ data: [...state.data, newItem] })),
}));
