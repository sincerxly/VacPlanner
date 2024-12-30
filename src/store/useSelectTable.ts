import { create } from "zustand";

interface SelectTableState {
  selectTable: number | null;
  setSelectTable: (table: number | null) => void;
}

export const useSelectTable = create<SelectTableState>((set) => ({
  selectTable: null,
  setSelectTable: (table) => set({ selectTable: table }),
}));
