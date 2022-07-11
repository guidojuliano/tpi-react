import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Searcher() {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);

  const key = "3276d54c5e244cd3ba432b5590c39c56";
  const getNews = async (query) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${key}&language=es`;
    const response = await axios.get(url);
    return response.data.articles;
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getNews(query).then((data) => setNews(data));
  };

  useEffect(() => {
    getNews(query).then((data) => setNews(data));
  }, []);

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
        onChange={onSearch}
      />
      <Button variant="contained" color="warning" type="submit">
        {" "}
        Buscar{" "}
      </Button>
    </Box>
  );
}
