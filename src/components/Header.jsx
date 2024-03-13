
// Header.jsx
import { Outlet } from 'react-router-dom';
import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import "../css/style.css";
import Logo from "../images/logo.png";

const Header = () => (
    <header className="hdr d-flex flex-row gap align-items-center px-5" style={{ justifyContent: 'space-between' }}>
        <div as={Link} to="/" className="mr-auto">
            <img src={Logo} alt='logo' style={{ width: '200px' }} />
        </div>
        <Navbar className="prev-header px-4 d-flex justify-content-between" expand="lg" variant="dark" >

            <div className="div-navb-header">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto gap-5" >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>

        </Navbar>
        <Outlet />
    </header>

);

export default Header;
