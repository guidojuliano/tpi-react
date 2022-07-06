import Searcher from '../Searcher';
import { Grid } from "@mui/material";
import * as React from "react";
import "../../App.css";

function Home() {
  return (
    
      <Grid
      container
      direction="column"
      className="home"
      justifyContent="center"
      alignItems="center"
    >
        <h1>Buscador de Noticias</h1>
        <p>
            Busca noticias en el mundo y obtén información sobre ellas.
        </p>
        <Searcher />
      </Grid>
   
  );
}

export default Home;