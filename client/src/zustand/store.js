import { create } from 'zustand';

const useStore = create((set) => ({
  isHidden: true,
  user: {},
  indexProject: 0,
  openModal: false,
  closeModal: true,
  openVisualizerModalProject: false,
  indexDeleteProject: null,
  indexEditProject: null,
  currentUser: null,
  updateHidden: (hidden) => set(() => ({ isHidden: hidden })),
  updateUser: (user) => set(() => ({ user: user })),
  updateIndexProject: (id) => set(() => ({ indexProject: id })),
  updateOpenModal: (open) => set(() => ({ openModal: open })),
  updateCloseModal: (close) => set(() => ({ closeModal: close })),
  updateOpenVisualizerModalProject: (open) => set(() => ({ openVisualizerModalProject: open })),
  updateIndexDeleteProject: (index) => set(() => ({ indexDeleteProject: index })),
  updateIndexEditProject: (index) => set(() => ({ indexEditProject: index })),
  updateCurrentUser: (user) => set(() => ({ currentUser: user })),
}));

export default useStore;
