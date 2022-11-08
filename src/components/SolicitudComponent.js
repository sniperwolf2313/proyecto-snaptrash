import React from 'react'

export const SolicitudComponent = () => {
    const getLocation = () => {
        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log('Latitud: '+latitude+'Longitude :'+longitude);
            alert('Latitud: '+latitude+'Longitude :'+longitude);
        }

        function error() {
            alert('Unable to retrieve your location');
        }

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

  return (
    <div>
        <div class="col-md-10 mx-auto">
            <div class="card">
                <div class="card-header">
                    <h1>Reporte de residuos</h1>
                </div>
                <div class="card-body">
                    <form class="was-validated" action="" method="POST">
                        <div class="mb-3 row">
                            <div class="col-3">
                                <button class="btn btn-outline-secondary" onClick={getLocation}>Obtener ubicación</button>
                            </div>
                            <div class="col">
                            <input class="form-control" disabled placeholder='Dirección'></input>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <div class="col-3">
                                <button class="btn btn-outline-secondary">Tomar/Subir foto</button>
                            </div>
                            <div class="col">
                            <input type="file" class="form-control" disabled></input>
                            </div>
                        </div>
                        
                        <div class="mb-3 text-start">
                            <label for="validationTextarea" class="form-label">Descripción del Problema</label>
                            <textarea name="descripcion" class="form-control is-invalid" id="validationTextarea" placeholder="Hablanos sobre el problema" required></textarea>
                            
                        </div>
                        <div class = "mb-3 text-center">
                            <button name="btnpostular" class="btn btn-primary" type="submit">Subir Reporte</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
