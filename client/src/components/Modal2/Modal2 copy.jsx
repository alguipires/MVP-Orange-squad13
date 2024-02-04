// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import useStore from '../../zustand/store';
// import { Button } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import './Modal2.css'
// //import { orange } from '@mui/material/colors';



// /*const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };*/

// export function ModalAdicionado() {
//   const [updateOpenModal, updateOpenModal2, updateCloseModal2 ] = useStore((state) => 
//   [state.updateOpenModal, state.updateOpenModal2, state.updateCloseModal2 ]
//   );


//   const handleClose = () => {
//     updateOpenModal2(false);
//     updateCloseModal2(true);
//     updateOpenModal(false);
//   };


//   return (
//     <Box className='caixaSucesso'> 
//     <section className='modalSucesso'>
      
//         <div className='modalTitulo'>
//           <h2>Projeto Adicionado com Sucesso!</h2>
//         </div>
//         <div className='modalImagen'>
//           <CheckCircleIcon sx={{ color: "green",fontSize: 40,}} />
//         </div>
//         <div className='modalBotao'>
//           <Button className='botaoVoltar' onClick={handleClose} variant="contained" color = "success" >Voltar Para Projetos</Button>
      
//       </div>
//     </section>
//     </Box>
    
//   );
// }

// export function ModalEditado() {
//   const [updateOpenModal, updateOpenModal2, updateCloseModal2 ] = useStore((state) => 
//   [state.updateOpenModal, state.updateOpenModal2, state.updateCloseModal2 ]
//   );


//   const handleClose = () => {
//     updateOpenModal2(false);
//     updateCloseModal2(true);
//     updateOpenModal(false);
//   };


//   return (
//     <Box className='caixaSucesso'>
//     <section className='modalSucesso'>
      
//         <div className='modalTitulo'>
//           <h2>Edição Concluída com Sucesso!</h2>
//         </div>
//         <div className='modalImagen'>
//           <CheckCircleIcon sx={{ color: "green",fontSize: 40,}} />
//         </div>
//         <div className='modalBotao'>
//           <Button className='botaoVoltar' onClick={handleClose} variant="contained" color = "success" >Voltar Para Projetos</Button>
      
//       </div>
//     </section>
//     </Box>
//   );
// }
// export function ModalDeletado() {
//   const [updateOpenModal, updateOpenModal2, updateCloseModal2 ] = useStore((state) => 
//   [state.updateOpenModal, state.updateOpenModal2, state.updateCloseModal2 ]
//   );


//   const handleClose = () => {
//     updateOpenModal2(false);
//     updateCloseModal2(true);
//     updateOpenModal(false);
//   };


//   return (
//     <Box className='caixaSucesso'>
//     <section className='modalSucesso'>
      
//         <div className='modalTitulo'>
//           <h2>Projeto Deletado com Sucesso!</h2>
//         </div>
//         <div className='modalImagen'>
//           <CheckCircleIcon sx={{ color: "green",fontSize: 40,}} />
//         </div>
//         <div className='modalBotao'>
//           <Button className='botaoVoltar' onClick={handleClose} variant="contained" color = "success" >Voltar Para Projetos</Button>
      
//       </div>
//     </section>
//     </Box>
    
//   );
// }
// export function ModalExcluir() {
//   const [updateOpenModal, updateOpenModal2, updateCloseModal2 ] = useStore((state) => 
//   [state.updateOpenModal, state.updateOpenModal2, state.updateCloseModal2 ]
//   );


//   const handleClose = () => {
//     updateOpenModal2(false);
//     updateCloseModal2(true);
//     updateOpenModal(false);
//   };


//   return (
//     <Box className='caixaExcluir'>

//     <section className='modalExcluir'>
      
//         <div className='modalTituloExcluir'>
//           <h2>Deseja Excluir?</h2>
//         </div>
//         <div className='modalTextExcluir'>
//           <p>Se você prosseguir irá excluir o projeto do <br/> seu portfólio</p>
//         </div>
//         <div className='modalBotaoExcluir'>
//           <Button className='botaoExcluir' onClick={handleClose} variant="contained">Excluir</Button>
//           <Button className='botaoCancelar' onClick={handleClose} >Cancelar</Button>
      
//       </div>
//     </section>
//     </Box>
    
//   );
// }



// export default function NestedModal() {
//   const [ openModal2,updateOpenModal2, updateCloseModal2 ] = useStore((state) => 
//   [ state.openModal2, state.updateOpenModal2, state.updateCloseModal2 ]
//   );

//   const handleOpen = () => {
//     updateOpenModal2(true);
//     updateCloseModal2(false);
//   };

//   const handleClose = () => {
//     updateOpenModal2(false);
//     updateCloseModal2(true);
//   };


//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={openModal2}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//           <ModalExcluir/>
          
//       </Modal>
//     </div>
//   );
// }