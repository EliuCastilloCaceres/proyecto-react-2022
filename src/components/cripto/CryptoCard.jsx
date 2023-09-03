import { Link } from "react-router-dom"
import "./CryptoCard.css"

const CryptoCard = ({id,name,priceUsd,rank,symbol,changePercent24Hr})=>{
    return(
        <>
            <div id={id} className="card">
                <div className="card-header">
                    <h2>{symbol}</h2>
                    
                </div>
                <div className="card-body">
                <p>{name}</p>
                <p className="rank">Rank: #{rank}</p>
                <p>USD: ${parseFloat(priceUsd).toFixed(4)}</p>
                <p>
                    <span>24Hr Variation: </span>
                    <span className={parseFloat(changePercent24Hr) > 0 ? "positive" : "negative"}>
                        {parseFloat(changePercent24Hr).toFixed(3)}%
                    </span>
                </p>
                <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
                </div>
            </div>
        </>
    )
}
export default CryptoCard
