import React from 'react'

export default function ItemDetail({item}) {
    return (
        <div >
            <img src={item.image} alt="cerveza" />
            <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.text}</p>
                <p className="card-text">{item.price}</p>
                
            </div>
        </div>
    );
}
