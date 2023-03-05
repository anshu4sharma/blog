import { create } from 'zustand';
interface IuseProgressStore {
  isAnimating: boolean
  setIsAnimating: (isAnimating: boolean) => void
}
export const useProgressStore = create<IuseProgressStore>((set) => ({
  isAnimating: false,
  setIsAnimating: (isAnimating: boolean) => set(() => ({ isAnimating })),
}));
