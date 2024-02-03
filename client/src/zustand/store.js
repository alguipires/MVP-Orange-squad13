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
  openModalAdicionado: false,
  openModalEditado: false,
  openModalDeletado: false,
  openModalExcluir:false,
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
<<<<<<< HEAD
  updateOpenModal2: (open) => set(() => ({ openModal2: open })),
  updateOpenModalConfirmacao: (open) =>
    set(() => ({ openModalConfirmacao: open })),
=======
  updateOpenModal2:(open) => set(()=> ({openModal2: open})),
  updateOpenModalConfirmacao:(open) => set(()=> ({openModalConfirmacao: open})),
  updateOpenModalAdicionado:(open) => set (()=>({openModalAdicionado: open})),
  updateOpenModalEditado:(open) => set (()=>({openModalEditado: open})),
  updateOpenModalDeletado:(open) => set (()=>({openModalDeletado: open})),
  updateOpenModalExcluir:(open) => set (()=>({openModalExcluir: open})),
>>>>>>> 9b39eee (separação dos modais em componentes)
  updateCloseModal: (close) => set(() => ({ closeModal: close })),
  updateCloseModal2: (close) => set(() => ({ closeModal: close })),
  updateCloseModalConfirmacao: (close) => set(() => ({ closeModal: close })),
  updateCurrentUser: (user) => set(() => ({ currentUser: user })),
  updateCurrentProject: (project) => set(() => ({ currentProject: project })),
  updatecurrentProjectSave: (boolean) =>
    set(() => ({ currentProjectSave: boolean })),
}));

export default useStore;
