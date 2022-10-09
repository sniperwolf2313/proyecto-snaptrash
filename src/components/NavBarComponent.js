
import React from 'react'

export const NavBarComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
            <div class="navbar-nav">
                <a class="navbar-brand display-1" href='/'><img src='/img/logo.png' alt='logo' width={35}></img></a>
                <a class="nav-item nav-link active" href='/'>Inicio</a>
                <a class="nav-item nav-link" href='/'>Nuevo Reporte</a>
                <a class="nav-item nav-link" href='/'>Reportes</a>
                <a class="nav-item nav-link" href = "/">Ayuda</a>
                <a class="nav-item nav-link" href = "/">Perfil</a>
                <a class="nav-item nav-link" href = "/">Salir</a>
                <div class="mx-1">
                <a class="btn btn-outline-primary" href = "/">Iniciar Sesión</a>
                </div>
                <div class="mx-1">
                <a class="btn btn-outline-primary" href = "/">Registrarse</a>
                </div>
                
        </div>
    </nav>
  )
}