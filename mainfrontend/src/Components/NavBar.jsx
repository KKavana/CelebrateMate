import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/login" activeClassName="active">Login</NavLink>
            <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
        </nav>
    );
};

export default Navbar;
