import React from 'react'

export const SolicitudComponent = () => {
  return (
    <div>
        <div class="col-md-10 mx-auto">
    <div class="card">
        <div class="card-header">
            <h1>Reporte de residuos</h1>
        </div>
        <div class="card-body">
            <form class="was-validated" action="/retos/crear-reto" method="POST">
                <br/> <br/>

                <div class="mb-3">
                    <label for="validationTextarea" class="form.label">Título del Problema</label>
                    <input name="titulo" type="text" class="form-control" required autofocus/>
                    <div class="invalid-feedback">Selecciona un título valido</div>
                </div>

                <div class="mb-3">
                    <label for="validationTextarea" class="form-label">Descripción del Problema</label>
                    <textarea name="descripcion" class="form-control is-invalid" id="validationTextarea" placeholder="Hablanos sobre el problema" required></textarea>
                </div>

                <div class="mb-3">
                    <div class="invalid-feedback">Selecciona una categoria acorde a tu Problema</div>
                </div>

                <div class="mb-3">
                    <input name="file" type="file" class="form-control" aria-label="file example"/>
                </div>

                <div class="mb-3">
                    <button name="btnpostular" class="btn btn-primary" type="submit">Postular</button>
                </div>
            </form>
        </div>
    </div>
</div>
    </div>
  )
}
