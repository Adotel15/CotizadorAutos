
import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

// Hook que automáticamente usa useContext para llamar al Cotizador context
// Y recoge las variables globales
const useCotizador = () =>{
    
    return useContext(CotizadorContext)
}

export default useCotizador