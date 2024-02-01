import { create } from 'zustand';

const useStore = create((set) => ({
  isHidden: true,
  openModal: false,
  closeModal: true,
  currentUser: null,
  updateHidden: (hidden) => set(() => ({ isHidden: hidden })),
  updateOpenModal: (open) => set(() => ({ openModal: open })),
  updateCloseModal: (close) => set(() => ({ closeModal: close })),
  updateCurrentUser: (user) => set(() => ({ currentUser: user })),
}));

export default useStore;
