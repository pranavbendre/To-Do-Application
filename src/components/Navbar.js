import React from 'react'
import { Link } from 'react-router-dom' // Use of Link from 'react-router-dom' to navigate. 

export default function Navbar() {
  return (
                        // JSX & Inline-CSS.

    <nav
    className="navbar bg-dark"
    style={{
      position: "fixed",
      paddingBottom: "7px",
      top: "119px"
    }}
  >
    <ul className="navbar-nav">
        <Link className="nav-links" to="/"><li className="nav-item">
        <i className="fa-solid fa-house"/>
        <p className="inner-link">Home</p>
      </li></Link>
    
        <Link className="nav-links" to="/tasks"><li className="nav-item">
        <i className="fa-solid fa-table-columns"/>
        <p className="inner-link">Tasks</p>
      </li></Link>
    </ul>
  </nav>
  )
}
