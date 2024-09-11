import React, { useEffect, useState } from 'react'

function CrudForm({addEquipo, editId, equipos, editEquipo, setEditId}) {

  const [deshabilitado, setDeshabilitado] = useState(true)

  const [formData, setFormData] = useState({
    id:`${Math.floor(Math.random() * 10000) + 1}`,
    nombre:"",
    pais:""
  })


  useEffect(() => {
    
    if(editId){
      const newEquipos = equipos.filter(equipo => equipo.id === editId)
      setFormData({
        id:`${newEquipos[0].id}`,
        nombre:`${newEquipos[0].nombre}`,
        pais:`${newEquipos[0].pais}`
      })
    }

    else{
     setFormData({
      id:`${Math.floor(Math.random() * 10000) + 1}`,
      nombre:"",
      pais:""
     })
    }

  }, [editId])
  

  const handleChange = (e)=>{
    
    if(formData.nombre !=="" && formData.pais !==""){
      setDeshabilitado(false)
    }

    else {
      setDeshabilitado(true)
    }


    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(editId){
      editEquipo(formData)
      
      setFormData({
        id:`${Math.floor(Math.random() * 10000) + 1}`,
      nombre:"",
      pais:""
      })

    }

    else{
      addEquipo(formData)

    setFormData({
      id:`${Math.floor(Math.random() * 10000) + 1}`,
    nombre:"",
    pais:""
    })

    }

    
  }
  
  const limpiar =()=>{
    setFormData({
      id:`${Math.floor(Math.random() * 10000) + 1}`,
      nombre:"",
      pais:""
    })

    setEditId(null)
    setDeshabilitado(true)
    

  }


  return (
    <form onSubmit={handleSubmit} >
      <label className='mx-1' htmlFor="nombre">Nombre:</label>
      <input onChange={handleChange} type="text" placeholder='Ingresar nombre...' name='nombre' value={formData.nombre} required />
      <label className='mx-1' htmlFor="pais">Pais:</label>
      <input onChange={handleChange} type="text" placeholder='Ingresar pais...' name='pais' 
      value={formData.pais} required/>
      <input disabled={deshabilitado} className='btn btn-success mx-1' type="submit" />
      <button onClick={limpiar} disabled={deshabilitado} type='button' className='btn btn-warning mx-1'> Cancelar</button>

    </form>
  )
}

export default CrudForm