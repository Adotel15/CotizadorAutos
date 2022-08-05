
import { Fragment } from "react"
import { MARCAS, YEARS, PLANES} from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {

    const { datos, handleChangeDatos, setError, error, cotizarSeguro } = useCotizador()

    const handleSubmit = evento => {
        evento.preventDefault()

        if(Object.values(datos).includes("")){
            setError("Todos los campos son obligatorios")
            return
        }

        setError("")
        cotizarSeguro()
    }

    return (
    <>
      {error && <Error />}

      <form
        onSubmit={handleSubmit}
      >
        <div className = "my-5">
            <label className = "block mb-3 font-bold text-gray-400 uppercase">Marca</label>
            <select
                name = "marca"
                className = "w-full p-3 bg-white border-gray-200"
                onChange = {event => handleChangeDatos(event)}
                value = {datos.marca}
            >
                <option value = "">-- Selecciona Marca --</option>

                {MARCAS.map (marca => (
                    <option
                        key = {marca.id}
                        value = {marca.id}
                    >
                        {marca.nombre}
                    </option>
                ))}
            </select>
        </div>

        <div className = "my-5">
            <label className = "block mb-3 font-bold text-gray-400 uppercase">Año</label>
            <select
                name = "year"
                className = "w-full p-3 bg-white"
                onChange = {event => handleChangeDatos(event)}
                value = {datos.year}
            >
                <option value = "">-- Selecciona Año --</option>

                {YEARS.map (year => (
                    <option
                        key = {year}
                        value = {year}
                    >
                        {year}
                    </option>
                ))}
            </select>
        </div>

        <div className = "my-5">
            <label className = "block mb-3 font-bold text-gray-400 uppercase">Elige un Plan</label>
            
            <div className = "flex gap-3 items-center">
                {PLANES.map( plan => (
                    <Fragment key = {plan.id}>
                        <label>
                            {plan.nombre}
                        </label>
                        <input
                            type = "radio"
                            name = "plan"
                            value = {plan.id}
                            onChange = {event => handleChangeDatos(event)}
                        />
                    </Fragment>
                ))}

            </div>
        </div>

        <input 
            type = "submit"
            className = "w-full rounded-md bg-orange-800 text-white hover:bg-orange-200 hover:text-black cursor-pointer transition-colors p-2 uppercase"
            value = "Cotizar"
        />

      </form>
    </>
    )
}

export default Formulario
