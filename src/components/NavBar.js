import React from 'react'
import {Link} from "react-router-dom";


function NavBar() {

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <ul>
            <Link to="/">Home</Link> <br />
            <Link to="/characters/new">Character Form</Link> <br />
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;