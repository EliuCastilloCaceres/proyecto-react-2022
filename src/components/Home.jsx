import { Link } from "react-router-dom"
import "./Home.css"
const Home = () =>{
    return(
        <div className="main-content">
            <h1>Hola Bienvenido a CriptoMarket</h1>
            <div className="body-content">
            <p>Conoce las 100 Criptos mas usadas</p>
            <Link to="/criptomonedas">Ver criptomonedas</Link>
            </div>
        </div>
    )
}

export default Home
