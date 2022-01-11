import React from "react";
import './Navbar.css';
import {NavLink} from 'react-router-dom';

function Navbar (){
    return(
        <div>
            <nav className="navbar  fixed-top navbar-expand-lg navbar-light navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav d-flex align-items-center ">
        <NavLink className="nav-link active" id='menu' exact to='/home'>Calendar</NavLink>
        <NavLink className="nav-link active" id='menu' exact to='/login'>Login</NavLink>
        <NavLink className="nav-link active" id='menu' exact to='/register'>Register</NavLink>

        
      </div>
    </div>
</nav>
        </div >
    );
}

export default Navbar;