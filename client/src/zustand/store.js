import { create } from 'zustand';

const useStore = create((set) => ({
  isHidden: true,
  updateHidden: (hidden) => set(() => ({ isHidden: hidden })),
}))

export default useStore;