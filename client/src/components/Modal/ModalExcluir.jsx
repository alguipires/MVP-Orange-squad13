import React, { useEffect, useState } from "react";
import { Box, Button, Modal, useMediaQuery } from "@mui/material";
import useStore from "../../zustand/store";
import { deleteProject, deleteProjectByGoogle } from "../../api/axiosInstance";
import handleAlert from "../../utils/handleAlert";
import { getSavedUser } from "../../utils/sessionStorageLogin";
import "./modalExcluir.css";

export default function ModalExcluir() {
  const [status, setStatus] = useState(null);
  const [
    idDeleteProject, 
    openDeleteProjectModal,
    updateOpenDeleteProjectModal,
    updateOpenDeleteSuccessModal,
    currentProjects,
    updateCurrentProjects,
  ] = useStore((state) => [
      state.idDeleteProject, 
      state.openDeleteProjectModal,
      state.updateOpenDeleteProjectModal,
      state.updateOpenDeleteSuccessModal,
      state.currentProjects,
      state.updateCurrentProjects,
    ]);
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (status === 204) {
      console.log('entrei aqui');
      updateOpenDeleteProjectModal(false);
      updateOpenDeleteSuccessModal(true);
      const newProjects = currentProjects.filter((project) => project.id !== idDeleteProject);
      updateCurrentProjects(newProjects);
    } else if (status === 401) {
      console.log('entrei no erro');
      updateOpenDeleteProjectModal(false);
      handleAlert("Erro ao excluir projeto");
    }
  }, [status]);

  const handleClose = () => {
    updateOpenDeleteProjectModal(false);
  };

  const deleteProjectConfirm = async () => {
    const userTokenGoogle = getSavedUser('@AuthFirebase:token');
    const userTokenBackEnd = getSavedUser('@AuthBackend:token');
    const userUuid = getSavedUser('@AuthFirebase:user');

    if (Object.keys(userTokenBackEnd).length !== 0) {
      const isDeleted = await deleteProject(idDeleteProject, userTokenBackEnd);
      setStatus(isDeleted);
    }

    if (Object.keys(userTokenGoogle).length !== 0) {
      const isDeleted = await deleteProjectByGoogle(idDeleteProject, userUuid.uid, userTokenGoogle);
      console.log(isDeleted);
      setStatus(isDeleted);
    }
  };

  const style = {
    position: 'absolute',
    top: isSmallScreen ? '55%' : '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    left: '50%',
    width: isSmallScreen ? '90vw' : 425,
    height: isSmallScreen ? '25vh' : 230,
    transform: 'translate(-50%, -50%)',
    bgcolor: '#FCFDFF',
    boxShadow: 2,
    zIndex: 2,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <Modal
        open={openDeleteProjectModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        
          <Box sx={{ ...style }}>
            <section className="modalExcluir">
              <div className="container_title_delete">
                <h2>Deseja Excluir?</h2>
              </div>
              <div className="container_text_delete">
                <p>
                  Se você prosseguir irá excluir o projeto do seu portfólio
                </p>
              </div>
              <div className="container_buttons_delete_cancel">
                <Button
                  className="button_delete"
                  onClick={ deleteProjectConfirm }
                  variant="contained"
                  style={{ marginRight: '15px', padding: '6px 15px'}}
                >
                  Exlcuir
                </Button>
                <Button 
                  className="button_cancel" 
                  onClick={handleClose}
                  style={{ padding: '6px 25px'}}
                  >
                  Cancelar
                </Button>
              </div>
            </section>
          </Box>
      </Modal>      
  );
}
