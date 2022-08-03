import Searcher from "../Searcher";
import { Grid } from "@mui/material";

import { useState } from "react";
import * as React from "react";
import "../../App.css";
import NewsList from "../NewsList";

function Home() {
  const [search, setSearch] = useState("");
  const onSearch = (criterio) => {
    setSearch(criterio);
  };

  return (
    <Grid
      container
      direction="column"
      className="home"
      justifyContent="center"
      alignItems="center"
    >
      <h1>Buscador de Noticias</h1>
      <p>Busca noticias en el mundo y obtén información sobre ellas.</p>
      <Searcher onSearch={onSearch} />
      <NewsList search={search} />
    </Grid>
  );
}

export default Home;
