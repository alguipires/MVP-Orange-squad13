import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useStore from '../../zustand/store';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './modalToView.css';
import {
  formattedDate,
  getFormattedMonthAndYear,
} from '../../utils/formatedData';
import { useMediaQuery } from '@mui/material';

const ModalPreview = ({ link, imgUrl, tag, description, createdAt, title }) => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const [currentUser, openPreviewModal, updateOpenPreviewModal] = useStore(
    (state) => [
      state.currentUser,
      state.openPreviewModal,
      state.updateOpenPreviewModal,
    ]
  );

  const handleClose = () => updateOpenPreviewModal(!openPreviewModal);

  const style = {
    position: 'absolute',
    top: isSmallScreen ? '58%' : '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isSmallScreen ? '100vw' : 900,
    height: isSmallScreen ? '85vh' : 800,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: isSmallScreen ? '25px 25px 0 0' : '0',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={openPreviewModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <section className="container_to_view_project">
            <button className="close_button_modal" onClick={handleClose}>
              <CloseOutlinedIcon onClick={handleClose} />
            </button>
            {isSmallScreen && (
              <div className="container_title">
                <h1>{title}</h1>
              </div>
            )}
            <div className="container_name_data_title_tags_img">
              <div className="container_name_data_title_tags">
                <div className="container_name_data">
                  <div className="container_avatar_user_modal">
                    <img
                      src={
                        currentUser?.photoURL
                          ? currentUser.photoURL
                          : currentUser?.avatar
                      }
                      alt="imagem do avatar"
                      className="img_project"
                    />
                  </div>

                  <div className="user_data_modal">
                    <div>
                      <strong>
                        {currentUser.displayName
                          ? currentUser.displayName
                          : `${currentUser.firstName} ${currentUser.lastName}`}
                      </strong>
                    </div>
                    <p>
                      {createdAt
                        ? formattedDate(createdAt)
                        : getFormattedMonthAndYear()}
                    </p>
                  </div>
                </div>
                {!isSmallScreen && (
                  <div className="container_title">
                    <h1>{title}</h1>
                  </div>
                )}
                <div className="container_tags">
                  <div className="tag_project_modal">{tag}</div>
                </div>
              </div>

              <div className="container_img_project_modal">
                <img src={imgUrl} alt="imagem do projeto" />
              </div>
            </div>

            <div className="container_description">
              <p>{description}</p>
            </div>

            <div className="container_url">
              <p>
                <strong>Download</strong>
              </p>
              <a href={link} target="_blank" rel="noreferrer">
                {link}
              </a>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalPreview;
