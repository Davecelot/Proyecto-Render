import React from "react";
import Chart from "./Chart";
import UserChart from './UserChart'
import '../styles/PrincipalContent.css'
import BannerMarvel from '../assets/images-Marvel/Img-Inicio.svg'

function PrincipalContent() {
  return (
    <React.Fragment>

      <div className="container-center">

          <img src={BannerMarvel} alt="Banner de Marvel con personajes de películas" className="banner-marvel"/>

        <div className="section">
          <div className="section-top">
            <h2>Películas registradas</h2>
            <a><div className="btn-section-top">
              <p>Ver todas</p> <i class="fa-solid fa-chevron-right"></i>
            </div></a>
          </div>

          <div>
            <Chart/> {/*Card Movies*/}
          </div>
        </div>


        <div className="section">
          <div className="section-top">
            <h2>Usuarios registrados</h2>
            <a><div className="btn-section-top">
              <p>Ver todos</p> <i class="fa-solid fa-chevron-right"></i>
            </div></a>
          </div>

          <div>
            <UserChart /> {/*Card User*/}
          </div>
        </div>


      </div>

    </React.Fragment>
  );
}
export default PrincipalContent;
