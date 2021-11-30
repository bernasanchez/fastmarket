import React, {useEffect} from 'react'
import Item from './Item';
import image1 from '../Assets/img/corona.jpg'
import image2 from '../Assets/img/patagoniapack.jpg'
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
                    <div className="col-md-4" key={card.id}>
                        <Link to={"item/"+card.id}>
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

