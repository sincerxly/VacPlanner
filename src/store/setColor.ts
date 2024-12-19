import { create } from "zustand";

interface SetColor {
  bgColor: string;
  setBgColor: (newBgColor: string) => void;
}
export const useSetColor = create<SetColor>((set) => ({
  bgColor: "#92C5FF",
  setBgColor(newBgColor: string) {
    set(() => ({ bgColor: newBgColor }));
  },
}));
