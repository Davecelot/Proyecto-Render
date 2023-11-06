import React from "react";

function Movie(props) {
  return (
    <img src={props.image} alt={props.name} />
  );
}

export default Movie;