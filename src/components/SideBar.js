import React from "react";
import { Link } from "react-router-dom";
import '../styles/SideBar.css';
import MarvelLogo from '../assets/images-Marvel/Logo-Marvel-Blanco.svg'

function SideBar() {
  return (
    <React.Fragment>

      <nav>
        <div className="burguer-menu">
          <i className="fa-solid fa-bars"></i>
        </div>

        <a href='/'><img src={MarvelLogo} alt="Logo de Marvel en color blanco" className='logo' /></a>

        <div className="menus">
          <div className='menu-section'>
            <h1>Menú</h1>
            <ul>
              <li>
                <Link to='/' className='navbar-label'>Inicio</Link>
              </li>
              <li>
                <Link to='/Peliculas' className='navbar-label'>Peliculas</Link>
              </li>
              <li>
                <Link to='/Usuarios' className='navbar-label'>Usuarios</Link>
              </li>
            </ul>
          </div>

          <div className='general-section'>
            <h1>General</h1>
            <ul>
              <li>
                <Link to='/Participantes' className='navbar-label'>Participantes</Link>
              </li>
              <li>
                <Link to='/Configuraciones' className='navbar-label'>Configuraciones</Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </React.Fragment>
  );
}
export default SideBar;
