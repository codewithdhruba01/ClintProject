import { create } from 'zustand';

interface AppState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isNavOpen: boolean;
  toggleNav: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  currentView: 'home' | 'contact' | 'about' | 'works';
  setView: (view: 'home' | 'contact' | 'about' | 'works') => void;
}

export const useStore = create<AppState>((set) => {
  // Initialize from URL
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const initialView = path === '/contact' ? 'contact' : path === '/about' ? 'about' : path === '/works' ? 'works' : 'home';

  return {
    activeSection: 'home',
    setActiveSection: (section) => set({ activeSection: section }),
    isNavOpen: false,
    toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
    isDarkMode: false,
    toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    currentView: initialView,
    setView: (view) => set({ currentView: view }),
  };
});
