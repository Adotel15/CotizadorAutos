
import { createContext, useState } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')

    const handleChangeDatos = evento => {
        setDatos({
            ...datos,                               // Copiamos el objeto inicial
            [evento.target.name] : evento.target.value   // Lo que está entre barras es el nombre de la variable del objeto
        })
    }


    return (
        <CotizadorContext.Provider
            value = {{
                datos,
                handleChangeDatos,
                error,
                setError
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