import React from 'react'
import {Link} from "react-router-dom";


function NavBar() {

  return (
    <nav className="navbar">
        <div className="nav-wrapper"><Link to="/">Home</Link></div>
        <div className="nav-wrapper"><Link to="/characters/new">Character Form</Link></div>
    </nav>
  )
}

export default NavBar;