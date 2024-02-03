export function ModalExcluir() {
    const [updateOpenModal, updateOpenModal2, updateCloseModal2, openModalDeletado,updateOpenModalDeletado ] = useStore((state) => 
    [state.updateOpenModal, state.updateOpenModal2, state.updateCloseModal2, state.openModalDeletado, state.updateOpenModalDeletado ]
    );
  
  
    const handleClose = () => {
      updateOpenModal2(false);
      updateCloseModal2(true);
      updateOpenModal(false);
      updateOpenModalDeletado(false);
    };
  
    const handleOpen = () => {
      updateOpenModalDeletado(true);
      updateCloseModal2(false);
    };
  
  
    return (
      <Box className='caixaExcluir'>
  
      <section className='modalExcluir'>
        
          <div className='modalTituloExcluir'>
            <h2>Deseja Excluir?</h2>
          </div>
          <div className='modalTextExcluir'>
            <p>Se você prosseguir irá excluir o projeto do <br/> seu portfólio</p>
          </div>
          <div className='modalBotaoExcluir'>
            <Button className='botaoExcluir' onClick={handleOpen} variant="contained">Exlcuir</Button>
            <Button className='botaoCancelar' onClick={handleClose} >Cancelar</Button>
        
        </div>
      </section>
      </Box>
      
    );
  }
  export function OpenModalExcluir() {
    const [ openModal2,updateOpenModal2, updateCloseModal2 ] = useStore((state) => 
    [ state.openModal2, state.updateOpenModal2, state.updateCloseModal2 ]
    );
  
    const handleOpen = () => {
      updateOpenModal2(true);
      updateCloseModal2(false);
    };
  
    const handleClose = () => {
      updateOpenModal2(false);
      updateCloseModal2(true);
    };
  
  
    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={openModal2}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
            <ModalExcluir/>  
        </Modal>
      </div>
    );
  }


  export default OpenModalExcluir