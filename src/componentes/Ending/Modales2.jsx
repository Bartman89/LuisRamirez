import React, { useState } from 'react'
import Modal2 from './Modal2'
import Contador from '../Ending/Contador'
import ContactForm2 from '../Ending/ContactForm2'


export default function Modales2() {

  const [mostrar, setMostrar] = useState(false)
  const [verContador, setVerContador] = useState(false)
  const [verFormn, setVerFormn] = useState(false)



  return (
<>
    <h1 className='text-center'>Modales</h1>
    <div className='container2'>
        
        
        <button  className='btn btn-success  mx-2' onClick={()=>setMostrar(true)} >Ver modal.</button>
        <Modal2 isOpen={mostrar} onClose={()=>setMostrar(false)}>
         <h2>Prueba de Children</h2>
         <h4>Segundo Componente Children</h4>
         <button>Boton children</button>
        </Modal2>

        <button  className='btn btn-success  mx-2' onClick={()=>setVerContador(true)} >Ver Contador.</button>
        <Modal2 isOpen={verContador} onClose={()=>setVerContador(false)}>
         <Contador/>
        </Modal2>

        <button  className='btn btn-success  mx-2' onClick={()=>setVerFormn(true)} >Ver Formulario.</button>
        <Modal2 isOpen={verFormn} onClose={()=>setVerFormn(false)}>
         <ContactForm2></ContactForm2>
        </Modal2>


    </div>
    </>
  )
}
