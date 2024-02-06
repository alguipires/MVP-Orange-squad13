import { create } from 'zustand';

const useStore = create((set) => ({
  isHidden: true,
  user: {},
  currentProjects: [],
  indexProject: 0,
  discoveryPage: false,
  openModal: false,
  closeModal: true,
  openVisualizerModalProject: false,
  openPreviewModal: false,
  openEditProjectModal: false,
  openDeleteProjectModal: false,
  openDeleteSuccessModal: false,
  openEditSuccessModal: false,
  idDeleteProject: null,
  indexEditProject: null,
  currentUser: null,
  currentProject: null,
  currentProjectSave: false,
  inputSearch: '',
  updateHidden: (hidden) => set(() => ({ isHidden: hidden })),
  updateUser: (user) => set(() => ({ user: user })),
  updateCurrentProjects: (projects) => set(() => ({ currentProjects: projects })),
  updateIndexProject: (id) => set(() => ({ indexProject: id })),
  updateDiscoveryPage: (boolean) => set(() => ({ discoveryPage: boolean })),
  updateOpenModal: (open) => set(() => ({ openModal: open })),
  updateCloseModal: (close) => set(() => ({ closeModal: close })),
  updateOpenVisualizerModalProject: (open) => set(() => ({ openVisualizerModalProject: open })),
  updateOpenPreviewModal: (open) => set(() => ({ openPreviewModal: open })),
  updateOpenEditProjectModal: (open) => set(() => ({ openEditProjectModal: open })),
  updateOpenDeleteProjectModal: (open) => set(() => ({ openDeleteProjectModal: open })),
  updateOpenDeleteSuccessModal: (open) => set(() => ({ openDeleteSuccessModal: open })),
  updateIdDeleteProject: (index) => set(() => ({ idDeleteProject: index })),
  updateOpenEditSuccessModal: (open) => set(() => ({ openEditSuccessModal: open })),
  updateIndexEditProject: (index) => set(() => ({ indexEditProject: index })),
  updateCurrentUser: (user) => set(() => ({ currentUser: user })),
  updateCurrentProject: (project) => set(() => ({ currentProject: project })),
  updatecurrentProjectSave: (boolean) => set(() => ({ currentProjectSave: boolean })),
  updateInputSearch: (input) => set(() => ({ inputSearch: input })),
}));

export default useStore;
