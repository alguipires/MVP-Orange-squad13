import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useStore from '../../zustand/store';
import './modalToView.css'
import formattedDate from '../../utils/formatedData';

const ModalToView = ({link, urlImg, tag, description, createdAt, title}) => {
  const [
    user,
    openVisualizerModalProject, 
    updateOpenVisualizerModalProject
  ] = useStore((state) => [
    state.user,
    state.openVisualizerModalProject,
    state.updateOpenVisualizerModalProject,
  ]); 

  const handleClose = () => updateOpenVisualizerModalProject(!openVisualizerModalProject);

  function getFormattedMonthAndYear() {
    const currentDate = new Date();
  
    const year = currentDate.getFullYear().toString().slice(-2);
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  
    return `${month}/${year}`;
  }

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
          <section className='container_to_view_project'>
            <div className='container_name_data_title_tags'>

            <div className='container_avatar_user'>
              <img src={user.photoURL} alt='imagem do projeto' className='img_project' />
            </div>

            <div className='container_date_project'>
              <div className='user_data'>
                {user.displayName} 
                <div className='bullet_point'>
              </div>{createdAt ? formattedDate(createdAt) : getFormattedMonthAndYear() }</div>
            </div>  
              <div className='container_title'>
                <h1>{title}</h1>
              </div>
              <div className='container_tags'>
                {tag}
              </div>
            </div>

            <div className='container_img'>
              <img src={urlImg} alt='imagem do projeto'/>
            </div>

            <div className='container_description'>
              <p>{description}</p>
            </div>

            <div className='container_url'>
              <p><strong>Download</strong></p>
              <a href={link} target='_blank' rel='noreferrer'></a>
            </div>

          </section>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalToView;