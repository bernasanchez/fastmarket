import { Component } from "react";
import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link exact to="/" class="navbar-brand">
            FASTMARKET
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <ul class="navbar-nav">
            <li class="nav-item">
              <Link exact to="/" class="nav-link active" aria-current="page">
                HOME
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/category/bebidas" class="nav-link">
                Bebidas
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/category/almacen" class="nav-link" href="#">
                Almacen
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/category/frutas" class="nav-link" href="#">
                Frutas y Verduras
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/category/limpieza" class="nav-link" href="#">
                Limpieza
              </Link>
            </li>
          </ul>

          <span class="navbar-text">
            <CartWidget />
          </span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
