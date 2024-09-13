import React, { memo, useMemo } from 'react'



function MemoHijo({contador, sumar, restar}) {

//let maxNumero =0

//for(let i=0 ; i<1000000000 ; i++){
  //  maxNumero ++
//}

const maxNumero = useMemo (()=>{
   
    let maxNumero =0

for(let i=0 ; i<1000000000 ; i++){
    maxNumero ++
}

return maxNumero

}, [])

console.log("Renderizando Hijo")

  return (
    <>
    <div className='text-align-center'>

<h2 className='mt-5 text-warning'>Componente Hijo</h2>
<br />
<h3 >El valor de contador es : {contador} </h3>

<button onClick={restar} className='btn btn-warning mx-2' > Disminuir  </button>
<button onClick={sumar} className='btn btn-warning mx-2' > Aumentar  </button>

 <br />
 <br />
 <h5>Este valor esta siendo memorizado con <span className='fw-bold'>useMemo</span> a que su calculo conlleva un proceso pesado</h5>
 <br />
<h3 className='text-center text-danger'>{maxNumero}</h3>
</div>

    
    
    </>
    
  )
}

export default memo(MemoHijo) 