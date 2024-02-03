import { create } from 'zustand';

const useStore = create((set) => ({
  isHidden: true,
  user: {},
  indexProject: 0,
  discoveryPage: false,
  openModal: false,
  openModal2: false,
  openModalConfirmacao: false,
  openVisualizerModalProject: false,
  closeModal: true,
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
  updateOpenModal2: (open) => set(() => ({ openModal2: open })),
  updateOpenModalConfirmacao: (open) =>
    set(() => ({ openModalConfirmacao: open })),
  updateCloseModal: (close) => set(() => ({ closeModal: close })),
  updateCloseModal2: (close) => set(() => ({ closeModal: close })),
  updateCloseModalConfirmacao: (close) => set(() => ({ closeModal: close })),
  updateCurrentUser: (user) => set(() => ({ currentUser: user })),
  updateCurrentProject: (project) => set(() => ({ currentProject: project })),
  updatecurrentProjectSave: (boolean) =>
    set(() => ({ currentProjectSave: boolean })),
}));

export default useStore;
