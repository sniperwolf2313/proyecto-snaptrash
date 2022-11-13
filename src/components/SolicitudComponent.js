import { React, useState } from 'react';
import axios from 'axios';

export const SolicitudComponent = () => {
    const [values, setValues] = useState({
        description:"",
        latitude: "",
        longitude:"",
      });

    const url = 'http://localhost:5000/api/user/correo'
    
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

    const getLocation = () => {
        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log('Latitud: '+latitude+'Longitude :'+longitude);

            const newValues = {
                ...values,
                ['latitude']: latitude,
                ['longitude']: longitude,
            };
        
            setValues(newValues)
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

    const sentEmail = () => {
        if (values.description && values.latitude){
            console.log('da?');
            axios.post(url, {
                description:values.description,
                latitude:values.latitude,
                longitude:values.longitude
            })
            .then( (response ) => {
                console.log(response.data);
                alert('Correo enviado correctamente.')
            })
        }else{
            alert('Falta la ubicación y/o la descripción.')
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
                    <form class="was-validated" onSubmit={handleSubmit}>
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
                            <textarea name="description" class="form-control is-invalid" id="validationTextarea" placeholder="Hablanos sobre el problema" 
                            required value={values.name} onChange={handleChange}></textarea>
                        </div>
                        <div class = "mb-3 text-center">
                            <button name="btnpostular" class="btn btn-primary" onClick={sentEmail}>Subir Reporte</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
