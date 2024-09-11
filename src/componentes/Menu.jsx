import React from 'react'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div className='d-flex flex-column justify-content-start'>
       <h2 className='text-center'>Menu</h2> 
    <Link to='/' className='btn btn-primary m-1'>Crud Api</Link>
    <Link to='/pokemones' className='btn btn-primary m-1'>Pokemones</Link>
    <Link to='/contador' className='btn btn-primary m-1' >Contador</Link>
    <Link to='/crudApp' className='btn btn-primary m-1'>Crud App</Link>
    <Link to='/navbar' className='btn btn-primary m-1'>Navbar</Link>
    <Link to='/todolist' className='btn btn-primary m-1'>Todo List</Link>
    
        
    </div>



  )
}

export default Menu