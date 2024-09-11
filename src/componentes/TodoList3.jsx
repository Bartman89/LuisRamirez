import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import helpFetchTodoList from './helpFetchTodoList';

function TodoList3() {
  const API = helpFetchTodoList();

  const [showDeleteAll, setShowDeleteAll] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [idDelete, setIdDelete] = useState(null);

  const handleCloseDeleteAll = () => setShowDeleteAll(false);
  const handleShowDeleteAll = () => setShowDeleteAll(true);

  const [listadoTareas, setListadoTareas] = useState([]);

  useEffect(() => {
    API.get('tareas').then((response) => {
      !response.error ? setListadoTareas(response) : console.log(response.statusText);
    });
  }, []);

  const [idEdit, setIdEdit] = useState(null);
  const [formData, setDataForm] = useState({
    titulo: '',
    descripcion: '',
    id: `${Math.floor(Math.random() * 10000) + 1}`,
    isComplete: false,
  });

  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    if (idEdit !== null) {
      const editDataTask = listadoTareas.filter((task) => task.id === idEdit);

      setDataForm({
        id: `${idEdit}`,
        titulo: editDataTask[0].titulo,
        descripcion: editDataTask[0].descripcion,
        isComplete: editDataTask[0].isComplete,
      });
    } else {
      setDataForm({
        titulo: '',
        descripcion: '',
        id: `${Math.floor(Math.random() * 10000) + 1}`,
        isComplete: false,
      });
    }
  }, [idEdit]);

  const completeCount = listadoTareas.filter((task) => task.isComplete === true).length;
  const pendingCount = listadoTareas.length - completeCount;

  const handleChange = (e) => {
    e.preventDefault();

    setDataForm({
      ...formData,
      [e.target.name]: e.target.value
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idEdit === null) {
      const options = {
        method: 'POST',
        body: formData,
      };

      API.post('tareas', options).then((response) => {
        !response.error ? setListadoTareas([...listadoTareas, formData]) : console.log(response.statusText);
      });

      setIdEdit(null);
    } else {
      const options = {
        body: formData,
        method: 'PUT',
      };

      const newListTask = listadoTareas.map((task) => (task.id === idEdit ? formData : task));

      API.put('tareas', options, idEdit).then((response) => {
        !response.error ? setListadoTareas(newListTask) : console.log(response.statusText);
      });

      setIdEdit(null);
    }

    setDataForm({
      titulo: '',
      descripcion: '',
      id: `${Math.floor(Math.random() * 10000) + 1}`,
      isComplete: false,
    });
  };

  const deleteTask = (idDelete) => {
    const options = {
      method: 'DELETE',
    };

    const newTasks = listadoTareas.filter((task) => task.id !== idDelete);

    API.eliminar('tareas', options, idDelete).then((response) => {
      !response.error ? setListadoTareas(newTasks) : console.log(response.statusText);
    });

    handleClose();
  };

  const deleteTaskComplet = () => {
    const options = {
      method: 'DELETE',
    };

    const newTask = listadoTareas.filter((task) => task.isComplete !== true);

    const newTaskPending = listadoTareas.filter((task) => task.isComplete !== false);

    newTaskPending.map((task) => API.eliminar('tareas', options, task.id));

    setListadoTareas(newTask);

    handleCloseDeleteAll();
  };

  const allComplete = () => {
    const newTaskList = listadoTareas.map((task) => ({ ...task, isComplete: true }));
    setListadoTareas(newTaskList);

    newTaskList.map((task) => {
      const options = { method: 'PUT', body: task };
      API.put('tareas', options, task.id);
    });
  };

  const allPending = () => {
    const newTaskList = listadoTareas.map((task) => ({ ...task, isComplete: false }));

    newTaskList.map ((task)=>{
      const options ={method:"PUT", body: task}
      API.put("tareas", options, task.id)
    })

    setListadoTareas(newTaskList);
  };

  const handleCheck = (id) => {
    const task = listadoTareas.find((task) => task.id === id);
    setIsChecked(!task.isComplete);
    task.isComplete = !task.isComplete;

    const newTaskList = listadoTareas.map((tarea) => (tarea.id === id ? task : tarea));

    const dateAPI = newTaskList.find(tarea => tarea.id === id)

    const options = {
      method:"PUT",
      body: dateAPI
    }

    API.put("tareas", options , id )
     .then (response =>{
      !response.error ? setListadoTareas(newTaskList) :
      console.log(response.statusText)

     })


    


    
  };

  const manejoClick = () => {
    handleShow();
  };

  return (
    <>
      <div className="container">
        <form className="input-group shadow rounded p-3" onSubmit={handleSubmit}>
          <input required
            name="titulo"
            className="mx-1"
            type="text"
            placeholder="Ingresa titulo de tarea.."
            value={formData.titulo}
            onChange={handleChange}
          />
          <input required
            name="descripcion"
            className="mx-1"
            type="text"
            placeholder="Ingresa descripcion de tarea.."
            value={formData.descripcion}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-success mx-1">
            Enviar
          </button>
        </form>

        <div className="shadow rounded p-3 mt-5">
          <div className="d-flex align-items-center justify-content-between list-group-item">
            <h5 className="mx-1">Todo list.</h5>
            <button onClick={() => handleShowDeleteAll()} className="btn btn-danger mx- fs-6">
              Eliminar tareas completadas.
            </button>
            <button onClick={allPending} className="btn btn-warning mx-1 fs-6">
              Marcar todas las tareas como pendientes
            </button>
            <button onClick={allComplete} className="btn btn-primary mx-1 fs-6">
              Marcar todas las tareas como terminadas
            </button>
          </div>

          {listadoTareas.map((task) => {
            return (
              <div key={task.id} className="d-flex align-items-center list-group-item mt-4">
                <input
                  name="isComplete"
                  type="checkbox"
                  className="form-check-input mx-2"
                  checked={task.isComplete ? true : false}
                  onChange={() => handleCheck(task.id)}
                />
                <p className={`p-0 m-0 flex-grow-1 ${task.isComplete ? 'text-decoration-line-through' : ''}`}>
                  {task.titulo}
                  <br />
                  <span className="text-muted">{task.descripcion}</span>
                </p>
                {task.isComplete ? <span className="badge bg-success">Completada</span> : <span className="badge bg-secondary">Pendiente</span>}
                <button className="btn btn-warning mx-1" onClick={() => setIdEdit(task.id)}>
                  🖋️
                </button>
                <button className="btn btn-danger mx-1" onClick={() => { setIdDelete(task.id); manejoClick(); }}>
                  🗑️
                </button>
              </div>
            );
          })}

          <div className="list-group-item mt-4">
            <span className="fw-light font-monospace">
              Tareas totales: {listadoTareas.length}, Tareas completadas: {completeCount}, Tareas pendientes: {pendingCount}.
            </span>
          </div>
        </div>
      </div>

      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mensaje del sistema !!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Deseas Eliminar la tarea {idDelete}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button onClick={() => deleteTask(idDelete)} variant="primary">
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {showDeleteAll && (
        <Modal show={showDeleteAll} onHide={handleCloseDeleteAll}>
          <Modal.Header closeButton>
            <Modal.Title>Mensaje del sistema !!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Deseas eliminar las tareas completadas.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDeleteAll}>
              Cerrar
            </Button>
            <Button onClick={() => deleteTaskComplet()} variant="primary">
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default TodoList3;
