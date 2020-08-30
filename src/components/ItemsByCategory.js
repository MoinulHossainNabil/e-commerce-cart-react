import React from "react";
import Items from "./Items";

export default function ItemsByCategory({ itemList, addToCart, match }) {
  const dataByCategory = itemList.filter(
    (item) => item.category === match.params["category"]
  );
  return <Items itemList={dataByCategory} addToCart={addToCart} />;
}
