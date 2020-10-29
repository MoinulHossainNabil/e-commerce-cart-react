import React from "react";
import Items from "./Items";

export default function ItemsByCategory({ itemList, addToCart, match }) {
  let dataByCategory = itemList.filter(
    (item) => item.category === match.params["category"]
  );
  if(match.params["category"] === "All") {
   dataByCategory = [...itemList]; 
  }
  return <Items itemList={dataByCategory} addToCart={addToCart} />;
}
