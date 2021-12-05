import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { products } from "../products/products";

export const ItemDetailContainer = ({ match }) => {
  const [id, setId] = useState(null);
  const [productItem, setProductItem] = useState(null);

  useEffect(() => {
    console.log("ItemDetailContainer");
  }, []);

  useEffect(() => {
    if (match?.params?.id) {
      setId(match.params.id);
    }
  }, [match]);

  useEffect(() => {
    if (id) {
      const itemFromProducts = products.find(product => product.id == id);
      setProductItem(itemFromProducts);
    }
  }, [id]);

  return <div>{productItem ? <ItemDetail item={productItem} /> : null}</div>;
};
