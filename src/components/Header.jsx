import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Navbar } from "react-bootstrap";
import React from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="custom-navbar">
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">
          <NewspaperIcon />
          <span>Notibusqueda</span>
        </Navbar.Brand>
      </Navbar.Collapse>
      <Navbar.Text className="navbar-search">
        <Navbar.Brand href="/busqueda">
          <SearchIcon />
        </Navbar.Brand>
      </Navbar.Text>
    </Navbar>
  );
}

export default Header;
