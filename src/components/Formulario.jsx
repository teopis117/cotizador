import React from 'react'
import { Fragment} from 'react'
import { MARCAS,YEARS,PLANES} from '../constants'
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

function Formulario() {
    const {datos,handleChangeDatos,error,setError,cotizarSeguro}=useCotizador();

    const handleSubmit=e=>
    {
       e.preventDefault(); 
       if(Object.values(datos).includes(''))
       {
        setError('Todos los campos son obligatorios ')
        return;
    } 
    setError('');

    //TODO:COTIZAR
    cotizarSeguro()
    }



    
  return (
    <>
    {error && <Error/>}
    <form action="" onSubmit={handleSubmit}>
        <div className="my-5">
            <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                Marca
            </label>
            <select name="marca" className='w-full p-3 bg-white border border-gray-200' onChange={e=>handleChangeDatos(e)} value={datos.marca}>
                <option value="">--Selecciona Marca--</option>
                {MARCAS.map((marca)=>
                (
                    <option key={marca.id}
                            value={marca.nombre}>
                       {marca.nombre} 
                    </option>
                ))}
            </select>
        </div>
        <div className="my-5">
            <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                Año
            </label>
            <select name="year" className='w-full p-3 bg-white border border-gray-200' onChange={e=>handleChangeDatos(e)}  value={datos.year}>
                <option value="">--Selecciona Año--</option>
                {YEARS.map((year)=>
                (
                    <option key={year}
                            value={year}>
                     {year}
                    </option>
                ))}
            </select>
        </div>
        <div className="my-5">
            <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                Elige un plan
            </label>
            <div className="flex gap-3 items-center">
                {PLANES.map((plan)=>(
                    <Fragment key={plan.id}>
                    <label htmlFor="">{plan.nombre}</label>
                    <input type="radio" name='plan' value={plan.id} onChange={e=>handleChangeDatos(e)}/ >
                    </Fragment>
                ))}
            </div>
            
        </div>
        <input type="submit" value="Cotizar" className='w-full bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white uppercase p-3 font-bold' />
    </form>
    </>
  )
}

export default Formulario
