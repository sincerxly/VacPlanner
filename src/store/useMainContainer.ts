import { create } from "zustand";
import React from "react";

interface MainContainerState {
  mainContainerRef: React.RefObject<HTMLDivElement>;
  setMainContainerRef: (ref: React.RefObject<HTMLDivElement>) => void;
}
export const useMainContainer = create<MainContainerState>((set) => ({
  mainContainerRef: React.createRef<HTMLDivElement>(),
  setMainContainerRef: (ref) => set({ mainContainerRef: ref }),
}));
