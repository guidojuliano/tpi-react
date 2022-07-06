import { Grid } from "@mui/material";
import * as React from "react";
import "../../App.css";

function Search() {
  return (
    <Grid
      container
      direction="column"
      className="search-page"
      justifyContent="center"
      alignItems="center"
    >
        <h1>Buscador de Noticias</h1>
        <p>
            Busca noticias en el mundo y obtén información sobre ellas.
        </p>
    </Grid>
  );
}

export default Search;