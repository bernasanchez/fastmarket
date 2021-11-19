import React from 'react'
import './cards.css'
import Counter from './Counter/Counter'
import CounterDisplay from './CounterDisplay/CounterDisplay'

function ItemListContainer({title, imageCard, text}) {
   
    return (
        <div className="card text-center ">
            <img src={imageCard} alt="cerveza" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{text}</p>
                <CounterDisplay />
                <Counter/>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                        Agregar al Carrito
                </a>
            </div>
               
        </div>
    )
}

export default ItemListContainer


