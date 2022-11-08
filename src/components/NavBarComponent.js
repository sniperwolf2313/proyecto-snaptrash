
import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link, NavLink} from 'react-router-dom';

import { LoginComponent } from './LoginComponent';

export const NavBarComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
            <div class="navbar-nav">
                <Link class="navbar-brand display-1" to='/'><img src='/img/logo.png' alt='logo' width={35}></img></Link>
                <Link class="nav-item nav-link active" to='/'>Inicio</Link>
                <Link class="nav-item nav-link" to='/reporte'>Nuevo Reporte</Link>
                <Link class="nav-item nav-link" to='/reporte'>Reportes</Link>
                <Link class="nav-item nav-link" to = "/">Ayuda</Link>
                <Link class="nav-item nav-link" to = "/">Perfil</Link>
                <Link class="nav-item nav-link" to = "/">Salir</Link>
                <div class="mx-1">
                <Link className="btn btn-outline-primary" to="/login">Iniciar Sesión</Link>
                </div>
                <div class="mx-1">
                <Link class="btn btn-outline-primary" to="/register">Registrarse</Link>
                </div>
                
        </div>
    </nav>
    // <div>
    //   <Router>

    // <NavLink>
    //   <Link to="/login"></Link>
    // </NavLink>
    //   </Router>
    // </div>
  )
}