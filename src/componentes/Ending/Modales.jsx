import React, {  useState } from 'react'
import Modal from './Modal'
import Contador from '../../componentes/Ending/Contador'
import ContactForm2 from '../../componentes/Ending/ContactForm2'


function Modales() {

  const [mostrarModal, setMostrarModal] = useState(false)
  const [mostrarContador, setMostrarContador] = useState(false)
  const [mostarFormulario, setmostarFormulario] = useState(false)
  
  return (
    <>
    <h1 className='text-center'>Modales</h1>
    <div className='container2'>
      
      <button onClick={()=>{setMostrarModal(true)}} className='btn btn-success mx-1'>Ver Modal</button>
      <Modal mostrar={mostrarModal} onClose={()=>setMostrarModal(false)} >
        <h1>Probando Children</h1>
      </Modal>
      
      <button onClick={()=>{setMostrarContador(true)}} className='btn btn-success mx-1'>Ver Contador</button>
      <Modal mostrar={mostrarContador} onClose={()=>setMostrarContador(false)} >
        <Contador/>
      </Modal>

      <button onClick={()=>{setmostarFormulario(true)}} className='btn btn-success mx-1'>Ver Formulario</button>
      <Modal mostrar={mostarFormulario} onClose={()=>setmostarFormulario(false)} >
        <ContactForm2/>
      </Modal>

    </div>
    </>
  )
}

export default Modales