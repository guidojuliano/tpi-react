import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import SearchIcon from "@mui/icons-material/Search";
export default function Searcher(props) {
  const [searchText, setSearchText] = useState("");
  const [messageSize, setMessageSize] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const onSearchChange = (evento) => {
    setSearchText(evento.target.value);
  };
  const onSearchClick = () => {
    setMessageSize(true);
    setMessageRequired(true);
    if (searchText.length > 0) {
      setMessageRequired(false);
    }
    if (searchText.length > 2) {
      props.onSearch(searchText);
      setMessageSize(false);
      setMessageRequired(false);
    }
  };

  const onSearchKey = (evento) => {
    if (evento.keyCode === 13) {
      evento.preventDefault();
      setMessageRequired(false);
      if (searchText.length < 1) {
        setMessageRequired(true);
      }
      setMessageSize(true);
      if (searchText.length > 2) {
        props.onSearch(searchText);
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
        value={searchText}
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
        <SearchIcon />{" "}
      </Button>
      {messageRequired && (
        <Alert variant="filled" severity="error">
          Ingrese valor de busqueda
        </Alert>
      )}
      {messageSize && (
        <Alert variant="filled" severity="error">
          Ingrese como mínimo 3 caracteres
        </Alert>
      )}
    </Box>
  );
}
