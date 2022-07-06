import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Navbar } from "react-bootstrap";
import React from "react";
import "../App.css";
function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="custom-navbar">
      <Navbar.Brand href="/">
        <NewspaperIcon />
        <span>Notibusqueda</span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;