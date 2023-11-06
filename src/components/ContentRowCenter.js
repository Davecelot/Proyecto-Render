import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import LastUserInDb from "./LastUserInDb";
import Total from './Total';
import '../styles/ContentRowCenter.css'

function ContentRowCenter() {
  return (
    <div className="container-right">
       {/*ESTE ES EL DE LA DERECHAA :P*/}
      <LastMovieInDb />
      <LastUserInDb />
      <Total/>
     
    </div>
  );
}

export default ContentRowCenter;
