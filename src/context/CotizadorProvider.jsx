
import { createContext, useState } from "react";
import { obetenerDiferenciaYear, calcularMarcas, calcularPlan, formatearDinero } from '../helpers'

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: ""
    })

    const [error, setError] = useState("")
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = evento => {
        setDatos({
            ...datos,                                    // Copiamos el objeto inicial
            [evento.target.name] : evento.target.value   // Lo que está entre barras es el nombre de la variable del objeto
        })
    }

    const cotizarSeguro = () => {
        // Una base
        let resultado = 2000;
        // Diferencia de años
        const diferencia = obetenerDiferenciaYear(datos.year)

        // Hay que restar el 3% por cada año
        const porcentaje = (100 - (diferencia * 3)) / 100
        resultado *= porcentaje

        // Americano 15%
        // Europeo 30%
        // Asiatico 5%
        resultado *= calcularMarcas(datos.marca)

        // Básico 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan)
        
        // Formater Formato
        resultado = formatearDinero(resultado);
        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);
        

    }


    return (
        <CotizadorContext.Provider
            value = {{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro, 
                resultado,
                cargando
            }}        
        >
            { children }
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext;