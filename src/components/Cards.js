import React from 'react'
import ItemListContainer from './ItemListContainer';

import image1 from '../img/corona.jpg'
import image2 from '../img/patagoniapack.jpg'
const cards = [
    {
        id: 1, 
        title: 'Cerveza Corona',
        image: image1,
        text: 'Cerveza Rubia Pack 10u'
    },
    {
        id: 2, 
        title: 'Patagonia Pack',
        image: image2,
        text:'Cerveza Roja Pack 10u'
    }

]

function Cards() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
               {
                cards.map(card=>(
                    <div className="col-md-4" key={card.id}>
                        <ItemListContainer title={card.title} imageCard={card.image} text={card.text}/>
                    </div>
                ))
                 }
            </div>
        </div>
    )
}

export default Cards

