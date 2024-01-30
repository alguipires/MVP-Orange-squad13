import { create } from 'zustand';

const useStore = create((set) => ({
  isHidden: true,
  openModal: false,
  closeModal: true,
  updateHidden: (hidden) => set(() => ({ isHidden: hidden })),
  updateOpenModal: (open) => set(() => ({ openModal: open })),
  updateCloseModal: (close) => set(() => ({ closeModal: close })),
}))

export default useStore;