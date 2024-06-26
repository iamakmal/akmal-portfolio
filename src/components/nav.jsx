import React from 'react'
import logo from '../assets/logo.png'

function Nav() {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand fs-4" href="#home">
    <img src={logo} alt="Logo" height="22" className="d-inline-block align-text-top"/> &nbsp; Akmal Alavi </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link fs-5" href="#home">Home&nbsp;</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#about">About&nbsp;</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#skills">Skills&nbsp;</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#projects">Projects&nbsp;</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Nav