
import { Button } from 'bootstrap';
import { React,useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

export const NavBarComponent = () => {
  const [ check, setCheck ] = useState();
  const [ check2, setCheck2 ] = useState();

  useEffect(() =>{
    setCheck(localStorage.getItem('name'))
    setCheck2(localStorage.getItem('email'))
    console.log(check);
  }, [check])

  const cerrar = () => {
    localStorage.clear()
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    console.log('Done');
    console.log('done'+check);
    setCheck()
    setCheck2()
  }

  

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
            <div class="navbar-nav">
                <Link class="navbar-brand display-1" to='/'><img src='/img/logo.png' alt='logo' width={35}></img></Link>
                <Link class="nav-item nav-link active" to='/'>Inicio</Link>
                <Link class="nav-item nav-link" to='/reporte'>Nuevo Reporte</Link>
                {/* <Link class="nav-item nav-link" to='/reporte'>Reportes</Link> */}
                {/* <btn class="nav-item nav-link" onClick={cerrar()}>Ayuda</btn> */}
                {
                  !check ? <div></div>:<Link class="nav-item nav-link" to='/profile'>Perfil</Link>
                }
                <btn class="nav-item nav-link btn"  onClick={cerrar}>Salir</btn>
                <div class="mx-1">
                  {
                    check ? <div></div>:<Link className="btn btn-outline-primary mx-2" to="/login">Iniciar Sesión</Link>
                  }
                </div>
                <div class="mx-1">
                  {
                    check ? <div></div>:<Link class="btn btn-outline-primary" to="/register">Registrarse</Link>
                  }
                </div>
        </div>
    </nav>
  )
}