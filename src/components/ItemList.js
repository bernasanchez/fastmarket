import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

//Contenedor de Cards
function ItemList({ filteredItems }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (filteredItems) {
      setProductList(filteredItems);
    }
  }, [filteredItems]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        {productList.map(card => (
          <div className="col-md-2" key={card.id}>
            <Link to={`/item/${card.id}`}>
              <Item title={card.title} imageCard={card.image} text={card.text} price={card.price} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
