
import React from 'react'

export const NavBarComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
            <div class="navbar-nav">
                <a class="navbar-brand display-1" href='/'><img src='/img/logo.png' alt='logo' width={35}></img></a>
                <a class="nav-item nav-link active" href='/'>Inicio</a>
                <a class="nav-item nav-link" href='/'>Nueva Solicitud</a>
                <a class="nav-item nav-link" href='/'>Solicitudes</a>
                <a class="nav-item nav-link" href = "/">Soluciones</a>
                <a class="nav-item nav-link" href = "/">Ayuda</a>
                <a class="nav-item nav-link" href = "/">Perfil</a>
                <a class="nav-item nav-link" href = "/">Salir</a>
                <a class="btn btn-outline-primary my-2 my-sm-0" href = "/">Iniciar Sesión</a>
                <a class="btn btn-outline-primary my-2 my-sm-0" href = "/">Registrarse</a>
        </div>
    </nav>
  )
}