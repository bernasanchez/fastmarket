import React, {useEffect, useState} from 'react'
import ItemDetail from '../components/ItemDetail'
import image2 from '../Assets/img/patagoniapack.jpg'

const card ={
    id: 2, 
    title: 'Patagonia Pack',
    image: image2,
    text:'Cerveza Roja Pack 10u',
    price: '$200',
}


export default function ItemDetailContainer() {
    const [itemCard, setItemCard] = useState({});

    function getItem (){
        return new Promise((resolve, reject) =>{
            setTimeout(() =>resolve(card), 2000);
        });
    }

    useEffect(() => {
        getItem().then((resp) => {
            console.log(resp);
            setItemCard(resp);
        });
    }, []);

    return (
        <div>
            <ItemDetail item={itemCard} />
        </div>
    )
}   
