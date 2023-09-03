import CryptoCard from "./CryptoCard"
import "./CryptoGrid.css"
import usePetition from "../../hooks/usePetition"

const CryptoGrid = () => {
   const [criptos, cargandoCriptos] = usePetition("assets")
    if (cargandoCriptos) return <span>Cargando...</span>
    return (
        <>
            <h1>Top Crypto List</h1>
            <div className="crypto-grid">
            {
                criptos && (
                    criptos.map(({ id, name, priceUsd, symbol, rank, changePercent24Hr }) => (
                        // <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
                        <CryptoCard
                            key={id}
                            name={name}
                            priceUsd={priceUsd}
                            symbol={symbol}
                            rank={rank}
                            changePercent24Hr={changePercent24Hr}
                            id={id}
                        />
                    ))
                ) 
               
            }
        </div>
        </>
        
    )


}

export default CryptoGrid
