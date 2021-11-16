import { Component } from 'react'
import CartWidget from './CartWidget'

export default class NavBar extends Component {
    render() {
        return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">FASTMARKET</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">HOME</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="#">OFERTAS</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Bebidas</a></li>
                      <li><a class="dropdown-item" href="#">Carnes y Pescados</a></li>
                      <li><a class="dropdown-item" href="#">Frutas y Verduras</a></li>
                      <li><a class="dropdown-item" href="#">Limpieza</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="#">TIENDA</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="#">CONTACTO</a>
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
}
