import React from 'react'
import { useRef } from 'react';
import { useCallback,useMemo} from 'react';
import { MARCAS, PLANES } from '../constants';
import useCotizador from '../hooks/useCotizador'

function Resultado() {

    const {resultado,datos}=useCotizador();
    const {marca,plan,year}=datos;
    const [nombrePLan]=useCallback(PLANES.filter(p=>p.id===Number(plan)),
                        [resultado]);

    const yearRef=useRef(year);
   
    if(resultado===0) return null
  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className="text-gray-600 font-black text-3xl">
            Resultado
        </h2>
        <p className='my-2'>
            <span className='font-bold'>Marca:
                {marca}
            </span>
        </p>
        <p className='my-2'>
            <span className='font-bold'>Plan:
                {nombrePLan.nombre}
            </span>
        </p>

        <p className='my-2'>
            <span className='font-bold'>Año del Auto:
                {yearRef.current}
            </span>
        </p>
        <p className='my-2 text-2xl'>
            <span className='font-bold'>total:
                {resultado}
            </span>
        </p>
    </div>
  )
}

export default Resultado
