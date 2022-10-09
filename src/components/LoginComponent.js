import React from 'react'
import { RegisterComponent } from './RegisterComponent'

export const LoginComponent = () => {
    return (
        <div class="container w-75 bg-primary mt-5 rounded shadow">

            <div class="row align-items-stretch">
                
                <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
                    <div class="col bg-white p-5 rounded-end">

                        <div class="text-end">
                            <img src="/img/logo.png" width="48" alt=""/>
                        </div>

                        <div class="text-center">
                            <h2 class="fw-bold text-center py-5">Inicio Sesión</h2>
                        </div>

                        <form action="/users/signin" class="row g-3" method="POST">

                            <div class="form-group mb-4 text-start">
                                <label for="email" class="form-label">Correo Electronico</label>
                                <input type="email" class="form-control" name="email" required/>
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" name="password" required/>
                            </div>

                            <div class="form-group mb-4">
                                <input type="checkbox" name="connected" class="form-check-input"/>
                                <label for="connected" class="form-check-label">Mantener Sesión Iniciada</label>
                            </div>

                            <div class="form-group d-grid">
                                <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                            </div>

                            <div class="my-2">
                                <span>No tienes cuenta? <a href="{RegisterComponent}">Registrate AQUÍ</a></span>
                            </div>

                        </form>

                        <div class="container w-100 my-5">

                            <div class="row text-center">
                                <div class="col-12"> Iniciar Sesión</div>
                            </div>

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
