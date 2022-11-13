import { React, useState } from 'react';
import axios from 'axios';

export const RegisterComponent = () => {
    const [ post, setPost ] = useState();
    const [values, setValues] = useState({
        email: "",
        name:"",
        password: "",
        password2: "",
      });

    const url = 'http://localhost:5000/api/user/add'

    function handleSubmit(evt) {
        evt.preventDefault();
      }

    function handleChange(evt) {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
        ...values,
        [name]: value,
        };

        setValues(newValues)
    }

    const register = () => {
        try {
            if(values.password === values.password2){
                axios.post(url, {
                    email: values.email, 
                    name: values.name, 
                    password: values.password
                })
                .then( (response ) => {
                    setPost(response.data)
                    console.log(response.data);
                    alert('Usuario registrado correctamente')
                })
            }else{
                alert('La contraseña debe ser igual.')
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                        <form onSubmit={handleSubmit} class="row g-3">
                            <div class="form-group mb-4 text-start">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" name="name" required value={values.name} onChange={handleChange}/>
                                <label for="email" class="form-label">Correo Electronico</label>
                                <input type="email" class="form-control" name="email" required value={values.email} onChange={handleChange}/>
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" name="password" required value={values.password} onChange={handleChange}/>
                                <label for="password" class="form-label">Repetir Contraseña</label>
                                <input type="password" class="form-control" name="password2" required value={values.password2} onChange={handleChange}/>
                            </div>

                            <div class="form-group d-grid">
                                <button class="btn btn-primary" onClick={register}>Registrarse</button>
                            </div>
                        </form>

                        <div class="container w-100 my-5">
                            {/* <div class="row text-center">
                                <div class="col-12"> Registrarse con</div>
                            </div>
                        <br></br> */}
                        {/* <div class="row">
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
                        </div> */}
                    </div>
                </div>
            </div>
        </div>  
    )
}
