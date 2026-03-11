import { create } from 'zustand';

interface AppState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isNavOpen: boolean;
  toggleNav: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create<AppState>((set) => ({
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
