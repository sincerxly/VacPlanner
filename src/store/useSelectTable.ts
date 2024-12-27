import { create } from "zustand";

interface SelectTableState {
  selectTable: HTMLDivElement | null;
  setSelectTable: (table: HTMLDivElement | null) => void;
}

export const useSelectTable = create<SelectTableState>((set) => ({
  selectTable: null,
  setSelectTable: (table) => set({ selectTable: table }),
}));
