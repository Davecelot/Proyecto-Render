import React from "react";
import '../styles/styles.css';
import { useEffect } from "react";
import ContentWrapper from "./ContentWrapper";
import NotFound from "./NotFound";
import Peliculas from "./Peliculas";
import { Route, Switch } from "react-router-dom";
import Usuarios from "./Usuarios";
import Configuraciones from "./Configuraciones";
import Participantes from './Participantes';
import '../styles/SideBar.css';

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/51007c3285.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      // Limpiar el script al desmontar el componente para evitar fugas de memoria
      document.body.removeChild(script);
    };
  }, []); // El segundo argumento del useEffect []

  return (
    <React.Fragment>
      <>

        <Switch>
          <Route exact path="/">
            <ContentWrapper />
          </Route>
          <Route exact path="/Peliculas">
            <Peliculas />
          </Route>
          <Route path="/Usuarios">
            <Usuarios />
          </Route>
          <Route path="/Participantes">
            <Participantes />
          </Route>
          <Route path="/Configuraciones">
            <Configuraciones />
          </Route>
          <Route component={NotFound} />
        </Switch>

      </>
    </React.Fragment>
  );
}

export default App;
