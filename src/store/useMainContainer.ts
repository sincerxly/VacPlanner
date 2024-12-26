import { create } from "zustand";

interface MainContainerState {
  mainContainerRef: React.RefObject<HTMLDivElement> | null;
  setMainContainerRef: (ref: React.RefObject<HTMLDivElement>) => void;
}
export const useMainContainer = create<MainContainerState>((set) => ({
  mainContainerRef: null,
  setMainContainerRef: (ref) => set({ mainContainerRef: ref }),
}));
