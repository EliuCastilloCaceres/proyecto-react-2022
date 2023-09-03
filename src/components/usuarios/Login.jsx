import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = ()=>{

    const navigation = useNavigate()

    const [user, setUser]=useState({
        email:"",
        password:""
    })
    const [cargando, setCargando]=useState(false)
    const [error, setError]=useState()

    const submit = (e)=>{
        e.preventDefault()
        setCargando(true)
        setError(null)
        console.log(user)
        axios.post(`https://reqres.in/api/login`,user)
        .then( data => {
            setCargando(false)
            localStorage.setItem("tokenCriptos", data.data.token)
            navigation("/")
        })
        .catch(e=>{
            setCargando(false)
            console.log(e)
            setError(e.response.data.error)
        })
    }

    if(localStorage.getItem("tokenCriptos")) return <Navigate to="/" />

    return(
        <div className="login-container">
            <div className="login-content">
            <h1>Login</h1>
                <form onSubmit={submit}>
                    <div className="field">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input required onChange={(e)=>{
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }} type="email" name="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Contraseña</label>
                        <input required onChange={(e)=>{
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }} type="password" name="password" />
                    </div>
                    <div className="submit">
                        <input 
                        type="submit" 
                        value={
                            cargando ? "Cargando..." : "Ingresar"
                            } 
                        />
                    </div>
                </form>
                {
                    error && <span className="error">Error: {error}</span>
                }
            </div>
               
        </div>
        
    )
}
export default Login