import React from 'react'
import { createContext,useState} from 'react'
import { obtenerDiferenciaYear,calcularMarca,calcularPlan,formatearDiner} from '../helpers';


const CotizadorContext=createContext();
const CotizadorProvider=({children})=>
{

    const [datos,setDatos]=useState({
        marca:'',
        year:'',
        plan:''
    })

    const [resultado,setResultado]=useState(0);
    const [cargando,setCargando]=useState(false);
    const [error,setError]=useState('');
    const handleChangeDatos=e =>
    {
        setDatos(
            {
                ...datos, 
                [e.target.name]:e.target.value
            }
        )
    }


    const cotizarSeguro=()=>
    {
        //Una Base
        let resultado=2024;


        //Diferencia de años
        const diferencia  =obtenerDiferenciaYear(datos.year);
        
        
        //hay que restar el 3% por cada año
        resultado-= ((diferencia*3)*resultado)/100;
      
        //america 15% 

        //europe 30%

        //Asiatico 5%
    
        resultado*= calcularMarca(datos.marca);
        
        
        
        resultado*=calcularPlan(datos.plan);
        
        //formatear Dinero
        resultado=formatearDiner(resultado)
        setCargando(true);

        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 3000);
    }
    return (
        <CotizadorContext.Provider
        value={{
            datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
        }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}


export
{
    CotizadorProvider
}

export default CotizadorContext