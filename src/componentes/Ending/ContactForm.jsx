import React from 'react'
import useForm from '../../hooks/useForm'
import Alert from 'react-bootstrap/Alert';


function ContactForm() {

    const initialData ={
        nombre:"",
        email:"",
        asunto:"",
        mensaje:""


    }


    

    


    const onValidate = (form)=>{

        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        //let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,50}$/;    
        
     if (!regexName.test(form.nombre)){
      errors.nombre ="El campo nombre solo acepta  y espacios"      

        
     }   


     if (!regexComments.test(form.messaje)){
      errors.mensaje ="Excediste los 100 caracteres maximos permitidos"  
     }


     return errors

    }

    const {form, errors, loading, handleChange, handleSubmit} = useForm(initialData, onValidate)

  return (
    <form onSubmit={handleSubmit}>

        <label className='form-label' htmlFor="nombre">Nombre:</label>
        <input className='form-control' type="text" required  name='nombre' onChange={handleChange} value={form.nombre}/>
        {errors.nombre && <Alert className='mt-1' variant="danger">{errors.nombre} </Alert>}

        <label className='form-label' htmlFor="email">Email:</label>
        <input className='form-control' type="email" required  name='email' onChange={handleChange} value={form.email}/>
        {errors.email && <Alert className='mt-1' variant="danger">{errors.email} </Alert>}

        <label className='form-label' htmlFor="asunto">Asunto:</label>
        <input className='form-control' type="text" required  name='asunto' onChange={handleChange} value={form.asunto}/>
        {errors.asunto && <Alert className='mt-1' variant="danger">{errors.asunto} </Alert>}

        <label className='form-label' htmlFor="mensaje">Mensaje:</label>
        <textarea className='form-control' name="mensaje" required onChange={handleChange} value={form.mensaje}></textarea>
        {errors.mensaje && <Alert className='mt-1' variant="danger">{errors.mensaje} </Alert>}



        <button disabled={loading} className='btn btn-success mx-1 mt-2'>{loading ? "Enviando...": "Enviar"}</button>

    </form>
  )
}

export default ContactForm