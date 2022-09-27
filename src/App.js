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
        <NavBarComponent/>
      </header>
      <body>
        <MainComponent/>
        <LoginComponent/>
        <RegisterComponent/>
        <br/>
        <SolicitudComponent/>
      </body>
      <br></br>
      <footer>
        <FooterComponent/>
      </footer>
    </div>
  );
}

export default App;
