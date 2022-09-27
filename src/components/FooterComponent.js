import React from 'react'

export const FooterComponent = () => {
  return (
    <div>
        <footer class="bg-dark text-white pt-2 pb-4">
        <div class="container">
            <div class="row py-4 d-flex- align-items-center ">
            <div class="col md-12 text-center bg-dark mr-4">
                <a href="/" ><img src="/img/fb.png" width={40} alt=""/></a>
                <a href="/" ><img src="/img/whatsapp.png" width={40} alt=""/></a>
                <a href="/" ><img src="/img/twitter.png" width={40} alt=""/></a>
                <a href="/" ><img src="/img/ig.png" width={40} alt=""/></a>
                <a href="/" ><img src="/img/email.png" width={40} alt=""/></a>
            </div>
            </div>
        </div>
            <hr class="mb-4"/>

        <div class="container text-center text-md-start">
            <div class="row text-center text-md-start">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-monospace text-info">SnapTrash</h6>
                <p>Descripción</p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-monospace text-info">Menú</h6>
                <p>
                <a href="/" class="text-white">Inicio</a>
                </p>
                <p>
                <a href="/users/signin" class="text-white">Iniciar Sesión</a>
                </p>
                <p>
                <a href="/users/signup" class="text-white">Registrarse</a>
                </p>
                <p>
                <a href="/about" class="text-white">Ayuda</a>
                </p>
                <p>
                <a href="/retos/crear" class="text-white">Nueva Solicitud</a>
                </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-monospace text-info">Contacto</h6>
                <p>snaptrash@dominio.com</p>
                <p>Teléfono: 265 98 32</p>
                <p>Celular: 300 702 46 70</p>
                <p>Calle 43 # 45-96</p>
            </div>
            </div>

            <hr class="mb-1"/>
            <div class="row align-items-center">
            <div class="col-md-8 col-lg-8">
                <p>Copyright 2021 © All rights reserved by:</p>
                <br/>
                <a href="/"><strong class="text-info">SnapTrash</strong></a>
            </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
