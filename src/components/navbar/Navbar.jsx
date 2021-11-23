
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { pink } from '@mui/material/colors';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AuthContext } from '../../context/AuthContext';
import { Routes, Route, Navigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import "../navbar/navbar.css"

import About from '../aboutus/About';
import Home from '../home/Home';

import Dashboard from '../../dashboard/Dashboard';
import SignUp from '../register/Register';
import SignIn from '../login/Login';
import Contact from './contact/Contact';
import Login from './login/Login';
import Register from './register/Register';
import Aluminee from './aluminee/Aluminee';
const register = () => {
  console.log("this is the register")
}




export default function ButtonAppBar() {
  const { user } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    
    <div className="navbar">
      <div className="navbar-items">
        <div className="navbar-items-Right">
          <span className="home">
            <Link to="/">KCC</Link>
          </span>
        </div>
        <div className="navbar-items-left">
          <ul className="navbar-items-list">
            <li className="navbar-items-list-item"><Link to="/About">About</Link></li>
            <li className="navbar-items-list-item"><Link to="/Contact-us">Contact-Us</Link></li>
            <li className="navbar-items-list-item"><Link to="/Learn-Web-Dev">Learn-Web-Dev</Link></li>
            <li className="navbar-items-list-item"><Link to="/Aluminees">Aluminees</Link></li>
            <li className="navbar-items-list-item"><Link to="/Developers">Developers</Link></li>
            <li className="navbar-items-list-item"><Link to="login">Login</Link>/
            <Link to="register">Register</Link></li>
            </ul>
        </div>
      </div>
      <Routes>
        <Route path="Contact-Us" element={<Contact/>}/>
        <Route path="Aluminees" element={<Aluminee/>}/>
        <Route path="Learn-Web-Dev" element={<Register/>}/>
        <Route path="Developers" element={<Login/>}/>
        <Route path="Login" element={<About/>}/>
      </Routes>
    </div>
    
  )
}
