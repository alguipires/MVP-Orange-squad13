import { create } from 'zustand';

const useStore = create((set) => ({
  isHidden: true,
  user: {},
  indexProject: 0,
  discoveryPage: true,
  openModal: false,
  closeModal: true,
  openVisualizerModalProject: true,
  indexDeleteProject: null,
  indexEditProject: null,
  currentUser: null,
  currentProject: null,
  currentProjectSave: false,
  updateHidden: (hidden) => set(() => ({ isHidden: hidden })),
  updateUser: (user) => set(() => ({ user: user })),
  updateIndexProject: (id) => set(() => ({ indexProject: id })),
  updateDiscoveryPage: (boolean) => set(() => ({ discoveryPage: boolean })),
  updateOpenModal: (open) => set(() => ({ openModal: open })),
  updateCloseModal: (close) => set(() => ({ closeModal: close })),
  updateOpenVisualizerModalProject: (open) =>
    set(() => ({ openVisualizerModalProject: open })),
  updateIndexDeleteProject: (index) =>
    set(() => ({ indexDeleteProject: index })),
  updateIndexEditProject: (index) => set(() => ({ indexEditProject: index })),
  updateCurrentUser: (user) => set(() => ({ currentUser: user })),
  updateCurrentProject: (project) => set(() => ({ currentProject: project })),
  updatecurrentProjectSave: (boolean) =>
    set(() => ({ currentProjectSave: boolean })),
}));

export default useStore;
