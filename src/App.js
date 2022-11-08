import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import './App.css';
import { LoginComponent } from './components/LoginComponent';
import { RegisterComponent } from './components/RegisterComponent';
import { NavBarComponent } from './components/NavBarComponent';
import { FooterComponent } from './components/FooterComponent';
import { SolicitudComponent } from './components/SolicitudComponent';
import { MainComponent } from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <NavBarComponent/>
          <Routes>
            <Route exact path='/' element={<MainComponent/>}></Route>
            <Route exact path='/reporte' element={<SolicitudComponent/>}></Route>
            <Route exact path='/login' element={<LoginComponent/>}></Route>
            <Route exact path='/register' element={<RegisterComponent/>}></Route>
          </Routes>
        </Router>
      </header>
      <br></br>
      <footer>
        <FooterComponent/>
      </footer>
    </div>
  );
}

export default App;
