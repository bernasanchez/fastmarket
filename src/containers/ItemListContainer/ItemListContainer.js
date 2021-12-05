import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import { products } from "../../products/products";

function ItemListContainer({ match }) {
  const [productsItems, setProductItems] = useState([]);

  useEffect(() => {
    if (match?.params?.categoryId) {
      const id = match?.params?.categoryId;
      const itemsFromProducts = products.filter(product => product.type.toLocaleLowerCase() == id);

      setProductItems(itemsFromProducts);
    } else {
      setProductItems(products);
    }
  }, [match]);

  return <div>{productsItems ? <ItemList filteredItems={productsItems} /> : null}</div>;
}
export default ItemListContainer;
