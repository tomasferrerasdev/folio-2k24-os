import { create } from "zustand";
import { IconName } from "../components/OperatingSystem/Icon/Icon";

type Window = {
  id: number;
  windowTitle: string;
  windowBarColor: string;
  windowBarIcon: IconName;
  children: JSX.Element;
  width?: number;
  height?: number;
};

type WindowStore = {
  openWindows: Window[];
  activeWindow: number | null;
  addWindow: (window: Window) => void;
  removeWindow: (id: number) => void;
  setActiveWindow: (id: number | null) => void;
};

export const useWindowStore = create<WindowStore>((set) => ({
  openWindows: [],
  activeWindow: null,
  addWindow: (window) =>
    set((state) => {
      const isWindowOpen = state.openWindows.some(
        (openWindow) => openWindow.id === window.id
      );
      if (isWindowOpen) {
        return state;
      }
      return { openWindows: [...state.openWindows, window] };
    }),
  removeWindow: (id) =>
    set((state) => ({
      openWindows: state.openWindows.filter((window) => window.id !== id),
    })),
  setActiveWindow: (id) => set(() => ({ activeWindow: id })),
}));
