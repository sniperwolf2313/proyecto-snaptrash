import { React,useState,useEffect } from 'react'

export const ProfileComponent = () => {
  const [ name, setName] = useState()
  const [ email, setEmail] = useState()

  const divStyle = {
    maxWidth: '500px',
  }

  const color = {
    color: 'gray'
  }

  useEffect(() => {
    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
  })

  return (
    <center>
      <div class="card mb-3" style={divStyle}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src="/img/profile.jpg" class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"><b style={color}>Nombre: </b>{name}</h5>
              <h5 class="card-title"><b style={color}>Correo: </b>{email}</h5>
            </div>
          </div>
        </div>
      </div>
    </center>
  )
}
