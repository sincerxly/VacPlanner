import { create } from "zustand";

interface DataItem {
  id: number;
  name: string;
  bgColor: string;
}

interface DataForm {
  data: DataItem[];
  setData: (newItem: DataItem) => void;
}

export const useData = create<DataForm>((set) => ({
  data: [],
  setData: (newItem) =>
    set((state) => ({
      data: [...state.data, newItem],
    })),
}));
