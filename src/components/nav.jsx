import React from 'react'
import logo from '../assets/logo.png'
function Nav() {
 
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top navbar-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src={logo} alt="Logo" height="22" class="d-inline-block align-text-top"/> &nbsp; Akmal Alavi </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Nav