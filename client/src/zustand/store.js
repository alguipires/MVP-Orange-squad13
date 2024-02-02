import { create } from 'zustand';

const useStore = create((set) => ({
  isHidden: true,
  user: {},
  indexProject: 0,
  openModal: false,
  openVisualizerModalProject: false,
  closeModal: true,
  currentUser: null,
  updateHidden: (hidden) => set(() => ({ isHidden: hidden })),
  updateUser: (user) => set(() => ({ user: user })),
  updateIndexProject: (id) => set(() => ({ indexProject: id })),
  updateOpenModal: (open) => set(() => ({ openModal: open })),
  updateCloseModal: (close) => set(() => ({ closeModal: close })),
  updateCurrentUser: (user) => set(() => ({ currentUser: user })),
  updateOpenVisualizerModalProject: (open) => set(() => ({ openVisualizerModalProject: open })),
}));

export default useStore;
