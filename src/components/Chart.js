import React, { useState, useEffect } from "react"
import '../styles/Chart.css'
import ImagenPrueba from '../assets/images/404.jpg'

function Chart() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        // Verificar si data.movies es un array, si no, asignar un array vacío
        const moviesData = Array.isArray(data.movies) ? data.movies : [];
        setMovies(moviesData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {/* {movies.map((movie) => {
        return <Movie key={movie.id} {...movie} />;
      })} */}

      <div className="movies-carousel">
        <img src={ImagenPrueba} alt="Nombre de la película" className="movie-card"/>
      </div>
    </div>
  );
}

export default Chart;