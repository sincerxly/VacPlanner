import { create } from "zustand";

export interface DataItem {
  id: number;
  name: string;
  bgColor: string;
  startTime:string;
  endTime:string;
  bgImg : string;
}

interface DataForm {
  data: DataItem[];
  setData: (newItem: DataItem) => void;
  updateData: (id: number, updatedFields: Partial<DataItem>) => void;
}

export const useData = create<DataForm>((set) => ({
  data: [],
  setData: (newItem) =>
    set((state) => ({
      data: [...state.data, newItem],
    })),
  updateData: (id, updatedFields) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item
      ),
    })),
}));
