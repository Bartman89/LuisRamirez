import React from 'react'
//import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import useForm2 from '../../hooks/useForm2'



function ContactForm2() {

const initialData ={
  nombre: "",
  email:"",
  asunto:"",
  mensaje:""
   }

  const onValidate =(form)=>{
    
    let errors ={}

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    //let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,100}$/;

    if (!regexName.test(form.nombre)){
      
      errors.nombre ='El campo "Nombre" solo acepta letras y espacios'

    }

    if (!regexComments.test(form.mensaje)){
      
      errors.mensaje ="El campo mensaje admite maximo 100 Caracteres"
    }

    return  errors 
  } 

    const  {form, errors, loading, handleChange, handleSubmit} = useForm2(initialData, onValidate)

  return (
    <form onSubmit={handleSubmit}>

      <label className='form-label' htmlFor="nombre">Nombre:</label>
      <input className='form-control' type="text" name='nombre' value={form.nombre} onChange={handleChange} />
      {errors.nombre && <Alert  variant="danger">  {errors.nombre}</Alert>}

      <label className='form-label' htmlFor="email">Email:</label>
      <input className='form-control' type="email" name='email' value={form.email} onChange={handleChange}/>

      <label className='form-label' htmlFor="asunto" >Asunto:</label>
      <input className='form-control' type="text" name='asunto' value={form.asunto} onChange={handleChange}/>

      <label className='form-label' htmlFor="mensaje">Mensaje:</label>
      <textarea className='form-control' type="text" name='mensaje' value={form.mensaje} onChange={handleChange} />
      {errors.mensaje && <Alert  variant="danger">  {errors.mensaje}</Alert>}

      <button className='btn btn-success mt-2' disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>

    </form>
  )
}

export default ContactForm2