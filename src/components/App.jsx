import { Navigate, Outlet } from "react-router-dom"
import "./App.css"
import Menu from "./menu/menu"
function App() {

  if(!localStorage.getItem("tokenCriptos")) return <Navigate to="/login" />
 
  return (
    <>
    <Menu />
    <Outlet/>
    </>


  )
}

export default App
