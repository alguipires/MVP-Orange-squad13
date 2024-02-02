import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useStore from '../../zustand/store';

const ModalToView = () => {
  const [
    openVisualizerModalProject, 
    updateOpenVisualizerModalProject
  ] = useStore((state) => [
    state.openVisualizerModalProject,
    state.updateOpenVisualizerModalProject,
  ]); 

  const handleClose = () => updateOpenVisualizerModalProject(!openVisualizerModalProject);

  // console.log('openVisualizerModalProject:', openVisualizerModalProject);

  const style = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 800,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };
  

  return (
    <div>
      <Modal
        open={openVisualizerModalProject}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalToView;