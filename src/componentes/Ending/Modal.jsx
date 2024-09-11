import React from 'react'
import "./modal.css"

function Modal({onClose,children, mostrar}) {
  return (
    <div className='modal-container' style={{display : mostrar ? "grid" : "none"}}>
      <div className='modal-body'>
        <button className='modal-close' onClick={onClose}>X</button>
        {children}
      </div>
      </div>
  )
}

export default Modal