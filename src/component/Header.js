import React from 'react'

function Header() {
  return (
    <>
     <div className='container bg-light text-center text-secondary py-2'>
      <div className='row'>
        <div className='top col-lg-6 d-flex justify-content-between'>
         <img src='https://cdn11.bigcommerce.com/s-247kf1um74/images/stencil/136x36/logo_1528085946__65105.original.png' width='100px'/>
          <nav class="navbar">
  <div className="container">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-secondary" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
        <div className='col-lg-6 py-2'>
        <ul className='acc d-flex justify-content-around'>
         <li>Register or Sign in </li> 
          <li>My Whislist</li>
          <li>Compare</li>
          <li>My Account</li>
          </ul> 
        </div>
      </div>
     </div>
     <nav class=" container-fluid navbar navbar-expand-lg bg-warning">
  <div class="container">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Layout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shop</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
 
</nav>
    </>
  )
}

export default Header
