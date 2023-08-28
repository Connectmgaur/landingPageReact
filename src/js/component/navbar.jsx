import React from "react";


const Navbar=()=>{

  return (


<nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
  <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
  
  <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
  );

  };

export default Navbar;