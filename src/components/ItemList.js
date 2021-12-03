import React, {useEffect} from 'react'
import Item from './Item';
import image1 from '../Assets/img/corona.jpg'
import image2 from '../Assets/img/patagoniapack.jpg'
import image3 from '../Assets/img/aceiteOliva.jpg'
import image4 from '../Assets/img/yerbaPlayadito.jpg'
import image5 from '../Assets/img/desinfectanteAyudin.jpg'
import image6 from '../Assets/img/detergenteMagistral.jpg'
import {Link} from 'react-router-dom'


//Contenedor de Cards
function ItemList() {

    const cards = [
        {
            id: 1, 
            title: 'Cerveza Corona',
            image: image1,
            text: 'Cerveza Rubia Pack 10u',
            price: '$300',
        },
        {
            id: 2, 
            title: 'Patagonia Pack',
            image: image2,
            text:'Cerveza Roja Pack 10u',
            price: '$200',
        },
        {
            id: 3, 
            title: 'Aceite Oliva',
            image: image3,
            text:'Aceite Oliva Morixe',
            price: '$400',
        },
        {
            id: 4, 
            title: 'Yerba Playadito 1kg',
            image: image4,
            text:'Yerba Mate Suave Playadito 1kg',
            price: '$480',
        },
        {
            id: 5, 
            title: 'Desinfectante Ayudin Aerosol',
            image: image5,
            text:'Aerosol Desinfectante Ayudin Expert Frescura Matinal 332 Ml',
            price: '$250',
        },
        {
            id: 6, 
            title: 'Detergente Magistral',
            image: image6,
            text:'Detergente Magistral Limón 750 Ml',
            price: '$210',
        }
    
    ]

    const promise = new Promise((resolve, reject) =>{
        setTimeout(() =>resolve(cards), 2000);
    });

    useEffect(() => {
        promise.then((resp) => {
            console.log(resp);
        });
    }, []);

    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
               {
                cards.map(card=>(
                    <div className="col-md-2" key={card.id}>
                        <Link to={`item/${card.id}`}>
                        <Item title={card.title} imageCard={card.image} text={card.text} price={card.price}/>
                        </Link>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ItemList;

