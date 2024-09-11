//import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ModalCrudApi({show, handleClose, manejoClick,nameDelete}) {

    


  return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mensaje del sistema!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Realmente deseas eliminar al {nameDelete}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={manejoClick}>Eliminar</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalCrudApi