import React from 'react'
import logo from '../assets/logo.png'

function Nav() {

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand fs-4" href="#">
    <img src={logo} alt="Logo" height="22" class="d-inline-block align-text-top"/> &nbsp; Akmal Alavi </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link fs-5" href="#home">Home&nbsp;</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="#about">About&nbsp;</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="#skills">Skills&nbsp;</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="#projects">Projects&nbsp;</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Nav