import React from 'react'
import Contador from './componentes/Ending/Contador'
import Pokemones from './componentes/Ending/Pokemones'
import CrudApi from './componentes/Ending/CrudApi'
import Menu from './componentes/Ending/Menu'
import ContactForm from './componentes/Ending/ContactForm'
import ContactForm2 from './componentes/Ending/ContactForm2'
import Modales from './componentes/Ending/Modales'
import TodoList from './componentes/TodoList'
import TodoList2 from './componentes/TodoList2'
import TodoList3 from './componentes/TodoList3'
import TodoList4 from './componentes/TodoList4'


import {Routes, Route} from "react-router-dom";


import  './App.css'


function App() {
  return (
    <>
    <div className="container-fluid p-3 d-flex flex-row ">

    <Menu></Menu>
    <div className="container d-flex justify-content-center">
    <div className="col-auto">
    <Routes>

    <Route path='/' element={<CrudApi></CrudApi>}></Route>
    <Route path='/*' element={<CrudApi></CrudApi>}></Route>
    <Route path='/pokemones' element={<Pokemones></Pokemones>}></Route>
    <Route path='/contador' element={<Contador></Contador>}></Route>
    <Route path='/formulario' element={<ContactForm></ContactForm>}></Route>
    <Route path='/formulario2' element={<ContactForm2></ContactForm2>}></Route>
    <Route path='/modales' element={<Modales></Modales>}></Route>
    <Route path='/todolist' element={<TodoList></TodoList>}></Route>
    <Route path='/todolist2' element={<TodoList2></TodoList2>}></Route>
    <Route path='/todolist3' element={<TodoList3></TodoList3>}></Route>
    <Route path='/todolist4' element={<TodoList4></TodoList4>}></Route>
    </Routes>
    </div>
    </div>
    </div>
    </>
    

  )
}

export default App