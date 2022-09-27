import React from 'react'

export const RegisterComponent = () => {
    return (
        <div class="container w-75 bg-primary mt-5 rounded shadow">
            <div class="row align-items-stretch">
                <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
                    <div class="col bg-white p-5 rounded-end">
                        <div class="text-end">
                            <img src="/img/logo.png" width="48" alt=""/>
                        </div>
                        <div class="text-center">
                            <h2 class="fw-bold text-center py-5">Registro Nuevo Usuario</h2>
                        </div>
                        <form action="/users/signup" class="row g-3" method="POST">
                            <div class="form-group mb-4">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" name="nombre" required/>
                                <label for="apellido" class="form-label">Apellido</label>
                                <input type="text" class="form-control" name="apellido" required/>
                                <label for="email" class="form-label">Correo Electronico</label>
                                <input type="email" class="form-control" name="email"/>
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" name="password" required/>
                                <label for="password" class="form-label">Repetir Contraseña</label>
                                <input type="password" class="form-control" name="password2-registro" required/>
                            </div>

                            <div class="form-group d-grid">
                                <button type="submit" class="btn btn-primary">Registrarse</button>
                            </div>
                        </form>

                        <div class="container w-100 my-5">
                            <div class="row text-center">
                                <div class="col-12"> Registrarse con</div>
                            </div>
                        <br></br>
                        <div class="row">
                            <div class="col">
                                <button class="btn btn-outline-primary w-100 my-1">
                                    <div class="row align-items-center">
                                        <div class="col-2 d-none d-md-block">
                                            <img src="/img/facebook.png" width="32" alt=""/>
                                        </div>
                                        <div class="col-12 col-md-10 text-center">Facebook</div>
                                    </div>
                                </button>
                            </div>
                            <div class="col">
                                <button class="btn btn-outline-danger w-100 my-1">
                                    <div class="row align-items-center">
                                        <div class="col-2 d-none d-md-block">
                                            <img src="/img/google.png" width="32" alt=""/>
                                        </div>
                                        <div class="col-12 col-md-10 text-center">Google</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  

    )
}
