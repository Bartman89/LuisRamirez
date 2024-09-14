import React, { useEffect, useState, useContext} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import ModalCrudApi from './ModalCrudApi'
import Loader from './Loader'
import MessageErrorPokemon from './MessageErrorPokemon'



import {helpFetchCrudApi} from './helpFetch2'



function CrudApi() {



const [loading, setLoading] = useState(null)  

 const [equipos, setEquipos] = useState(null) 

 const [editId , setEditId] = useState(null)


 const [idDelete, setidDelete] = useState(null)

 const [nameDelete, setNameDelete] = useState(null)

 const [errorMessage, setErrorMessage] = useState(null)


 const [show, setShow] = useState(false);



  const handleClose = () => setShow(false);

  
  const handleShow = () => setShow(true)
    
  

  

  const API = helpFetchCrudApi()

  useEffect(() => {

    setLoading(true)
    API.get('equipos')
      .then(response =>{
        if (!response.error){
          
          setEquipos(response)

        }  

        else{
          setErrorMessage(response.statusText)
        }
      })
    
      setLoading(null)
  }, [])
  
  const addEquipo = (equipo)=>{
    setLoading(true)
    const options = {
      body: equipo,
      method:"POST"
    }

    API.post('equipos', options)
      .then(response =>{
         if(!response.error){
          setEquipos([...equipos, equipo])
          
         }

         else{
          setErrorMessage(response.statusText)
         }
      })

      setLoading(null)

  }

  
  const editEquipo = (equipo)=>{
  setLoading(true)

    const options ={
      method:"PUT",
      body: equipo,

    }




    API.put('equipos', options , equipo.id)
      .then (response =>{
        if(!response.error){
          const newEquipos = equipos.map ((elemento)=>{ return elemento.id === equipo.id ? equipo : elemento})

          setEquipos(newEquipos)

        }

        else{
          setErrorMessage(response.statusText)
        }
      })

      setEditId(null)
      setLoading(null)
  }


  const eliminar = ( ) =>{

    setLoading(true)

    const options ={
      method:"DELETE"
    }

    API.eliminarEquipo('equipos', options, idDelete)
      .then(response =>{
        if(!response.error){
          const newEquipos = equipos.filter(equipo => equipo.id !== idDelete)
          setEquipos(newEquipos)
          setidDelete(null)

    

          
        }

        else{
          setErrorMessage(response.statusText)
        }
      })

      setLoading(null)
  }


  const manejoClick = ()=>{
    
    setLoading(true)

    eliminar();
    handleClose()

    setLoading(null)
  }
  

  return (
    <>
    <br />
    <CrudForm equipos={equipos} addEquipo={addEquipo} editEquipo={editEquipo} editId={editId} setEditId={setEditId} ></CrudForm>
    <br />
    {loading ? <Loader></Loader> : errorMessage ? <MessageErrorPokemon text={errorMessage}></MessageErrorPokemon> :  equipos && <CrudTable equipos={equipos} setEditId={setEditId} setidDelete={setidDelete}handleShow={handleShow} setNameDelete={setNameDelete} ></CrudTable>}
    <ModalCrudApi show={show} handleClose={handleClose}  manejoClick={manejoClick} nameDelete={nameDelete}></ModalCrudApi>
    
    </>
  )
}

export default CrudApi