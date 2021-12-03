import { Component } from 'react';
import CartWidget from './CartWidget';

import { Link } from 'react-router-dom';

function NavBar (){
    
        return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <Link exact to="/" class="navbar-brand" >FASTMARKET</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                  <Link exact to="/" class="nav-link active" aria-current="page" >HOME</Link>
                  </li>
                  <li class="nav-item dropdown"> 
                    <Link to="/category/:categoryId" class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link to="/category/bebidas" class="dropdown-item" >Bebidas</Link></li>
                      <li><Link to="/category/carnes" class="dropdown-item" href="#">Carnes y Pescados</Link></li>
                      <li><Link to="/category/frutas" class="dropdown-item" href="#">Frutas y Verduras</Link></li>
                      <li><Link to="/category/limpieza" class="dropdown-item" href="#">Limpieza</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <span class="navbar-text">
              <CartWidget/>
              </span>
            </div>
          </nav>
   
        </div>
        )
}

export default NavBar;
