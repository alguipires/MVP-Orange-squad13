import { create } from 'zustand';

const useStore = create((set) => ({
  isHidden: true,
  user: {},
  openModal: false,
  openVisualizerModalProject: false,
  closeModal: true,
  currentUser: null,
  currentProject: null,
  updateHidden: (hidden) => set(() => ({ isHidden: hidden })),
  updateUser: (user) => set(() => ({ user: user })),
  updateOpenModal: (open) => set(() => ({ openModal: open })),
  updateCloseModal: (close) => set(() => ({ closeModal: close })),
  updateCurrentUser: (user) => set(() => ({ currentUser: user })),
  updateOpenVisualizerModalProject: (open) =>
    set(() => ({ openVisualizerModalProject: open })),
  updateCurrentProject: (project) => set(() => ({ currentProject: project })),
}));

export default useStore;
