
import { createContext, useState } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const handleChangeDatos = evento => {
        console.log(evento.target.name)
        console.log(evento.target.value)
    }

    return (
        <CotizadorContext.Provider
            value = {{
                handleChangeDatos
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