import Modal from 'react-bootstrap/Modal';

function ExamModal({children, modalState, handleClose}) {
  
    return (
      <>
        <Modal size="lg" show={modalState} onHide={() => handleClose()}>
          {children}
        </Modal>
      </>
    );
  }

  export default ExamModal