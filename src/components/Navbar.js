import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-left">
        <img src={require("./omLogo.jpg")} alt="Logo" className="logo" />
          <span className="website-name">www.websiteName.com</span>
        </div>
        <div className="navbar-right">
          <div className="dropdown">
            <button className="dropbtn">Home</button>
            <div className="dropdown-content">
              {/* Links for home dropdown */}
              {/* <a href="">Link 1</a>
              <a href="">Link 2</a>
              <a href="">Link 3</a> */}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Info</button>
            <div className="dropdown-content">
              {/* Links for info dropdown */}
              <a href="">Link 1</a>
              <a href="">Link 2</a>
              <a href="">Link 3</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Seva</button>
            <div className="dropdown-content">
              {/* Links for seva dropdown */}
              <a href="">Link 1</a>
              <a href="">Link 2</a>
              <a href="">Link 3</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Contact</button>
            <div className="dropdown-content">
              {/* Links for contact dropdown */}
              {/* <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a> */}
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar