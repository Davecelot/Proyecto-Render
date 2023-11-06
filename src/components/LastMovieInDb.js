import React from "react"
import { useState, useEffect } from "react"
import '../styles/LastMovieInDb.css'
import ImagenPrueba from '../assets/images/darth-vader.jpg'

function LastMovieInDb() {
  let [movie, setMovie] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.movies;
        setMovie(movies[movies.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <>
      <div className="container-lastmovie">
        <h2>Última película cargada</h2>
        <div className="last-movie">
          {/* <img src={movie.image} alt={movie.name}/>
            <p>{movie.name}</p> */}
          <img src={ImagenPrueba} alt={movie.image} className="lastmovie-image" />
          <p>Prueba</p>
        </div>
      </div>
    </>
  );
}

export default LastMovieInDb;
