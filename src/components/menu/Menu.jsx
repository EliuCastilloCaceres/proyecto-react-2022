import { useContext, } from "react"
import "./Menu.css"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
const Menu = () => {
    const navigation = useNavigate()
    const usuario = useContext(UserContext)
    //Link y navlink no puede estar fuera del BrowserRouter
    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
                <li><a onClick={()=>{
                    localStorage.removeItem("tokenCriptos")
                    navigation("/login")
                }} >Cerrar sesión</a></li>
            </ul>
        </nav>
    )
}
export default Menu