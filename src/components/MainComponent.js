import React from 'react'

export const MainComponent = () => {
  return (
    <div>
            <div class="jumbotron ">
                <br/>
                <img src='/img/logo.png'></img>
                <h1 class="display-1 text-center">SnapTrash</h1>
                <p class="lead"></p>
                <hr class="my-4"/> 
                <br/>
                <div class="container text-center">
                    <a class="btn btn-primary btn-lg" href="/" role="button">Generar Reporte</a>
                </div>
                <br/>
            </div>

            <br/> <br/> <br/>

<div class="container">
    <div class="jumbotron jumbotron-fluid p-2 text-center">
        <div class="container">
            <h1 class="display-4">Equipo</h1>
        </div>
    </div>
</div>

<br/> <br/> <br/>

<div id ="equipo" class="container">

    <div class="row align-items-end">
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
<br/>
    <div class="row align-items-end">
        <div class="card">
            <div class="card-header"> Nombre </div>
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
<br/>
    <div class="row align-items-end">
        <div class="card">
            <div class="card-header">Nombre </div>
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
<br/> <br/> <br/>
<div id="contacto" class="container">

    <div class="container">
        <div class="jumbotron jumbotron-fluid p-3 text-center">
            <div class="container">
                <h1 class="display-4">Contacto</h1>
            </div>
        </div>
    </div>
<br/> <br/> <br/>
    <div class="container contact">
        <div class="row">
            <div class="col-md-3">
                <div class="contact-info">
                    <img src="/img/logo.png" width="50px" alt=""/>
                    <h2>Contactanos</h2>
                    <h4>Nos encantaría saber de ti!</h4>
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
                        <div class="col-sm-offset-2 col-sm-10">
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
