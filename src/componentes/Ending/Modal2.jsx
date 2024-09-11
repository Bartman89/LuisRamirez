import React from 'react'
import './modal.css'

export default function ({isOpen, onClose, children}) {
  return (
    <div className='modal-container' style={{display: isOpen ? 'grid' : 'none'}}>
    <div className='modal-body'>
        <button className='modal-close' onClick={onClose}>X</button>
        {children}
    </div>
    </div>
  )
}
