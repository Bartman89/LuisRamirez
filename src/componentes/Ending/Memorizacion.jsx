import React, { useCallback, useState } from 'react'
import MemoHijo from './MemoHijo'



function Memorizacion() {

    const [contador, setContador] = useState(0)

    const [text, setText] =useState("")


    const handleChange= (e)=>{
        setText(e.target.value)
    }

    //const sumar = ()=>{setContador(contador +1)}

    const sumar =useCallback(()=>setContador(contador+1),[contador])

     const restar =useCallback(()=>setContador(contador-1),[contador])


    //const restar = ()=>{    setContador(contador-1)}
    

  return (
    <>
    <h1 >Memorizacion</h1>
    <h2>(memo, useCallback y useMemo)</h2>
    <br />
    <br />
   <div className='text-align-center'>

    <h2 className='text-success'>Componente Padre</h2>
    <br />
    <h3>El valor de contador es :  {contador}</h3>
    
    <button onClick={restar} className='btn btn-success mx-2' > Disminuir  </button>
    <button onClick={sumar} className='btn btn-success mx-2' > Aumentar  </button>
    
    <input type="text" value={text} onChange={handleChange} />

    </div>

    <MemoHijo contador={contador} sumar={sumar} restar={restar}></MemoHijo>

    <div className='container'>
    
    <h3 className='text-center'>Notas:</h3>
   

    </div>

       <div className='pie'>
       <p>Usamos <span className='fw-bold'> memo</span>  para memorizar un componente completo y evitar se renderice cuando haya cambios en el componente padre.  <br />
       De igual Manera usamos <span className='fw-bold'>useCallback</span> para recordar funciones que le pasamos al componente hijo y evitar su renderizado cuando usemos otras funciones en el componente padre. <br /> <br />
       De igual manera <span className='fw-bold'>useMemo</span> memoriza valores para evitar calculos innecesarios cuando se renderiza un componente.
       </p>
        </div> 

    </>
  )
}

export default Memorizacion