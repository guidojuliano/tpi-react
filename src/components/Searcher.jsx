import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';

const API_KEY = '3276d54c5e244cd3ba432b5590c39c56';
const getNews = async(query) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&language=es`;
    const response = await axios.get(url);
    return response.data.articles;
}



export default function BasicTextFields() {
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { mb:2, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" color='secondary' label="Busqueda" focused variant="outlined" />
        <Button variant="contained" color="secondary" type="submit"> Buscar </Button>
      </Box>
    );
  }