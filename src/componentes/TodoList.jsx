import React from 'react'

const listTask = [
  {
    tittle:"Titulo1",
    description:"Descripcion 1",
    isComplete: false,
    id:1

  }  ,

  {
    tittle:"Titulo 2",
    description:"Descripcion 2",
    isComplete: true,
    id:2
  }

]

const countComplete = listTask.filter(task => task.isComplete === true).length
const countPending = listTask.length - countComplete


function TodoList() {
  return (
    <div className='container'>
        <form className='inpout-group shadow rounded p-3'>
            <input className='mx-1'   type="text" placeholder='Ingresa titulo..'/>
            <input  className='mx-1' type="text" placeholder='Ingresa descripcion..' />
            <input type="submit" value="Agregar tarea" className='btn btn-success mx-1' />
        </form>

      <div className='shadow rounded p-3 mt-5 '>
        <div className='d-flex align-items-center justify-content-between list-group-item'>
            <h5>Todo list</h5>
            <button className='btn btn-danger'>Eliminar tareas completadas</button>
        </div>

        {listTask.map ((task)=>{ return(
            <div key={task.id} className='d-flex align-items-center list-group-item mt-4'>
                <input type="checkbox" checked={task.isComplete} className='form-check-input mx-2'/>
                <p className={`p-0 m-0 flex-grow-1 ${task.isComplete ? 'text-decoration-line-through': ''}`}>
                    {task.tittle} <br />
                    <span className='text-muted'>{task.description}</span>
                </p>
                {task.isComplete && <span className='badge bg-success'>Completada</span>}
                <button className='btn btn-warning mx-1'>🖋️</button>
                <button className='btn btn-danger mx-1'>🗑️</button>
            </div>
        )})}

        <div className='list-group-item mt-4'>
            <span className='fw-light font-monospace '>Total de tareas:{listTask.length} , Completadas:{countComplete} , Pendientes:{countPending} </span>
        </div>

        </div>      

    </div>
  )
}

export default TodoList