import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import props from "prop-types";

export default function Searcher() {
  const [search, setSearch] = useState("");
  const [messageSize, setMessageSize] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const onSearchChange = (evento) => {
    setSearch(evento.target.value);
  };
  const onSearchClick = () => {
    setMessageSize(true);
    setMessageRequired(true);
    if (search.length > 0) {
      setMessageRequired(false);
    }
    if (search.length > 2) {
      props.onSearch(search);
      setMessageSize(false);
      setMessageRequired(false);
    }
  };

  const onSearchKey = (evento) => {
    if (evento.keyCode === 13) {
      evento.preventDefault();
      setMessageRequired(false);
      if (search.length < 1) {
        setMessageRequired(true);
      }
      setMessageSize(true);
      if (search.length > 2) {
        props.onSearch(search);
        setMessageSize(false);
        setMessageRequired(false);
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { mb: 2, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        color="warning"
        label="Busqueda"
        focused
        variant="outlined"
        value={search}
        onChange={onSearchChange}
        onKeyDown={onSearchKey}
      />
      <Button
        variant="contained"
        color="warning"
        type="submit"
        onClick={onSearchClick}
      >
        {" "}
        Buscar{" "}
      </Button>
      {messageRequired && (
        <alert variant="filled" severity="error">
          Ingrese valor de busqueda
        </alert>
      )}
      {messageSize && (
        <alert variant="filled" severity="error">
          Ingrese como mínimo 3 caracteres
        </alert>
      )}
    </Box>
  );
}
