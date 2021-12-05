import React from 'react'
import './cards.css'




//Componente Item: estructura de la card
function Item({title, imageCard, text, price}) {
   
    return (
        <div className="card text-center ">
            <img src={imageCard} alt="cerveza" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{text}</p>
                <p className="card-text">{price}</p>
            </div>
        </div>
    )
}

export default Item;


