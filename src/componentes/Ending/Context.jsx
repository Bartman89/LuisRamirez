import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

function Context() {

  
  const {theme, handleTheme } = useContext(ThemeContext)
  
  return (

   <div className='container'>

    <div className={`text-center py-1 my-1 ${theme}`} >
      <input  type="radio" name='theme' id='light' value="light" onClick={handleTheme} />
      <label  className='mx-1' htmlFor="light">Claro</label>
      <input type="radio" name='theme' id='dark' value="dark" onClick={handleTheme} />
      <label className='mx-1' htmlFor="dark">Oscuro</label>
    </div>


    <div className={theme}>
      <br />
      <h1>Elegir Tema claro u oscuro!!</h1>
    </div>

    <div className={`pie2 ${theme}`}>
    En este código se implemento un contexto de React para manejar el tema de la aplicación. 
    </div>

    </div>
  )
}

export default Context