import React from 'react'
import { Link } from "react-router-dom";


function Menu() {
  return (
    <>
    <div className='d-flex flex-column justify-content-start'>
     <h2 className='text-center'>Menu</h2>
     
     <Link className='btn btn-primary p-1 m-1' to="/">Home</Link>
     <Link className='btn btn-primary p-1 m-1' to="/todolist4">Todo List</Link>
     <Link className='btn btn-primary p-1 m-1' to="/formulario2">Formulario </Link>
     <Link className='btn btn-primary p-1 m-1' to="/pokemones">Pokemones</Link>
     <Link className='btn btn-primary p-1 m-1' to="/modales">Modales</Link>
     <Link className='btn btn-primary p-1 m-1' to="/contador">Contador</Link>
     <Link className='btn btn-primary p-1 m-1' to="/memorizacion">Memorizacion</Link>
     

     
     </div>
     
     
    </>
  )
}

export default Menu