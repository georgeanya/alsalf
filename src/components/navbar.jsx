import React from 'react'

const Navbar = () => {
  return (
    <div class="navbar navbar-expand-lg navbar-light nav_bar">
        <div class="navbar_brand navbar-brand" href='#' >ALSALF</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar_link" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link navbar_link_item" href="#home">Who we are</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar_link_item" href="#about">What we do</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar_link_item" href="#menu">Founders</a>
            </li>
            
          </ul>
        </div>
    </div>
  )
}

export default Navbar
