import { create } from 'zustand';

const useStore = create((set) => ({
  isHidden: true,
  user: {},
  indexProject: 0,
  discoveryPage: false,
  openModal: false,
  openVisualizerModalProject: false,
  openModalAdicionado: false,
  openModalEditado: false,
  openModalDeletado: false,
  openModalExcluir:false,
  closeModal: true,
  currentUser: null,
  indexDeleteProject: null,
  indexEditProject: null,

  currentUser: null,
  currentProject: null,

  updateHidden: (hidden) => set(() => ({ isHidden: hidden })),
  updateUser: (user) => set(() => ({ user: user })),
  updateIndexProject: (id) => set(() => ({ indexProject: id })),
  updateDiscoveryPage: (boolean) => set(() => ({ discoveryPage: boolean })),
  updateOpenModal: (open) => set(() => ({ openModal: open })),
  updateOpenModal2:(open) => set(()=> ({openModal2: open})),
  updateOpenModalAdicionado:(open) => set (()=>({openModalAdicionado: open})),
  updateOpenModalEditado:(open) => set (()=>({openModalEditado: open})),
  updateOpenModalDeletado:(open) => set (()=>({openModalDeletado: open})),
  updateOpenModalExcluir:(open) => set (()=>({openModalExcluir: open})),
  updateCloseModal: (close) => set(() => ({ closeModal: close })),

  updateOpenVisualizerModalProject: (open) =>
    set(() => ({ openVisualizerModalProject: open })),
  updateIndexDeleteProject: (index) =>
    set(() => ({ indexDeleteProject: index })),
  updateIndexEditProject: (index) => set(() => ({ indexEditProject: index })),
  updateCurrentUser: (user) => set(() => ({ currentUser: user })),
  updateCurrentProject: (project) => set(() => ({ currentProject: project })),

}));

export default useStore;
