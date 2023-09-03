import { useParams } from "react-router-dom"
import usePetition from "../../hooks/usePetition"
import Criptoinfo from "./info/Criptoinfo"
import CriptoHistorial from "./info/CriptoHistorial"

const CriptoPage = () => {
    const params = useParams()//devuelve parametros que existen en la url

    const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`)
    const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

    if(cargandoCripto || cargandoHistory) return <span>Cargando...</span>

    return (
        <>
            <h1>{params.id}</h1>
            {
                cripto && <Criptoinfo cripto={cripto} />
            }
            {
                history && <CriptoHistorial history={history} />
            }
        </>
    )
}
export default CriptoPage