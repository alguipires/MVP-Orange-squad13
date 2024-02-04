import React, { useEffect, useState } from "react";
import { Box, Button, Modal, useMediaQuery } from "@mui/material";
import useStore from "../../zustand/store";
// import { deleteProject } from "../../api/axiosInstance";
import handleAlert from "../../utils/handleAlert";
import { getSavedUser } from "../../utils/sessionStorageLogin";
import ModalDeletado from "./ModalDeletado";
import "./modalExcluir.css";

export default function ModalExcluir() {
  const [token, setToken] = useState("");
  const [isDeletedProject, setIsDeletedProject] = useState(false);
  const [
    // idDeleteProject, 
    openDeleteProjectModal,
    openDeleteSuccessModal,
    updateOpenDeleteProjectModal,
  ] = useStore((state) => [
      // state.idDeleteProject, 
      state.openDeleteProjectModal,
      state.openDeleteSuccessModal,
      state.updateOpenDeleteProjectModal,
    ]);
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const getToken = async () => {
      const userTokenGoogle = getSavedUser('@AuthFirebase:token');
      const userTokenBackEnd = getSavedUser('@AuthBackend:token');

      if (userTokenBackEnd) {
        setToken(userTokenBackEnd);
      }
      if (userTokenGoogle) {
        setToken(userTokenGoogle);
      }
    };
    getToken();
  }, [isDeletedProject]);

  const handleClose = () => {
    updateOpenDeleteProjectModal(false);
  };

  const deleteProjectConfirm = async () => {
    console.log(token);
    // const isDeleted = await deleteProject(idDeleteProject);
    const isDeleted = 204;

    if (isDeleted === 204) {
      console.log('entrei aqui');
      updateOpenDeleteProjectModal(false);
    }
    
    if (isDeleted === 401) {
      // handleAlert("Erro ao excluir projeto");
      console.log('entrei aqui');
      updateOpenDeleteProjectModal(false);
      // return;
    }
    
    setTimeout(() => {
      setIsDeletedProject(true);
    }, 1000);
    
  };
  console.log(handleAlert);
  setTimeout(() => {
    // setIsDeletedProject(true);
    console.log('isDeletedProject', isDeletedProject);
  }, 3000);

  const style = {
    position: 'absolute',
    top: isSmallScreen ? '55%' : '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    left: '50%',
    width: isSmallScreen ? '90vw' : 380,
    height: isSmallScreen ? '85vh' : 230,
    transform: 'translate(-50%, -50%)',
    bgcolor: '#FCFDFF',
    boxShadow: 2,
    zIndex: 2,
    pt: 2,
    px: 4,
    pb: 3,
  };
  console.log('openDeleteSuccessModal', openDeleteSuccessModal);
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
              <div className="modalTextExcluir">
                <p>
                  Se você prosseguir irá excluir o projeto do <br /> seu portfólio
                </p>
              </div>
              <div className="container_buttons_delete_cancel">
                <Button
                  className="button_delete"
                  onClick={ deleteProjectConfirm }
                  variant="contained"
                >
                  Exlcuir
                </Button>
                <Button className="button_cancel" onClick={handleClose}>
                  Cancelar
                </Button>
              </div>
            </section>
            {isDeletedProject && <ModalDeletado />}
          </Box>
      </Modal>      
  );
}
