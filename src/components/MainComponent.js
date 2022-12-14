import React from 'react'

export const MainComponent = () => {
  return (
    <div class ="flex">
        <div class="container-expand-lg">
        <div class="jumbotron jumbotron-fluid">
            <br/><br/>
            <div class="row align-items-center">
                <div class="col">
                    <img src='/img/logo.png' alt='' width={350}></img>
                </div>
                <div class="col text-start">
                    <h1 class="display-1"><strong>SnapTrash</strong> </h1>
                    <br/>
                    <a class="btn btn-primary btn-lg" href="/" role="button">Generar Reporte</a>
                </div>
            </div>
            <br/>
        </div>
        </div>
        <div class="row">
            <div class="col text-start">
                <p>
                    lorem
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>

                </p>
            </div>
            <div class="col text-end">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
            </div>
        </div>
        <br/>

        <div class="container-expand-lg">
            <div class="jumbotron jumbotron-fluid p-1 text-center">
                <div class="container">
                    <h2 class="display-6">Equipo</h2>
                </div>
            </div>
        </div>
        <br/>
        <div class="container text-start">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header">Nombre</div>
                        <div class="card-body">
                            <div class="col">
                                <img src="/img/user.png" class="img-thumbnail" width="100px" alt="..."/>
                            </div>
                            <blockquote class="blockquote mb-0">
                                <p>Cargo</p>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <div class="card-header">Nombre</div>
                        <div class="card-body">
                            <div class="col">
                                <img src="/img/user.png" class="img-thumbnail" width="100px" alt="..."/>
                            </div>
                            <blockquote class="blockquote mb-0">
                                <p>Cargo</p>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <div class="card-header">Nombre</div>
                        <div class="card-body">
                            <div class="col">
                                <img src="/img/user.png" class="img-thumbnail" width="100px" alt="..."/>
                            </div>
                            <blockquote class="blockquote mb-0">
                                <p>Cargo</p>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <div class="card-header">Nombre</div>
                        <div class="card-body">
                            <div class="col">
                                <img src="/img/user.png" class="img-thumbnail" width="100px" alt="..."/>
                            </div>
                            <blockquote class="blockquote mb-0">
                                <p>Cargo</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/> <br/>

        <div class="container-expand-lg">
            <div class="jumbotron jumbotron-fluid p-1 text-center">
                <div class="container">
                    <h1 class="display-6">Contacto</h1>
                </div>
            </div>
            <br/>
            <div class="container contact text-start rounded shadow">
                <div class="row">
                    <div class="col-md-3 align-self-center">
                        <div class="contact-info text-center">
                            <img src="/img/logo.png" width="50px" alt=""/>
                            <h2>Contactanos</h2>
                            <h4>Nos encantar??a saber de ti!</h4>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="contact-form">
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="nombre-contacto">Nombre:</label>
                                <div class="col-sm-10">          
                                    <input type="text" class="form-control" id="nombre-contacto" name="nombre"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="Apellido">Apellido:</label>
                                <div class="col-sm-10">          
                                    <input type="text" class="form-control" id="apellido" name="apellido"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="email">Email:</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="email" name="email"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="comentario-contacto">Comentario:</label>
                                <div class="col-sm-10">
                                    <textarea class="form-control" rows="5" id="comentario-contacto"></textarea>
                                </div>
                            </div>
                            <div class="form-group p-3">        
                                <div class="col-sm-offset-2 col-sm-10 text-center">
                                    <button type="submit" class="btn btn-outline-primary">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/> <br/> <br></br>
    </div>
  )
}
