import React, { useState } from "react";

const itemsMandatory = [
  { id: 1, name: "Chewing Gum", mandatory: true },
  { id: 2, name: "Cool Drink", mandatory: false },
  { id: 3, name: "Green Tea", mandatory: true },
  { id: 4, name: "Milk", mandatory: false },
  { id: 5, name: "", mandatory: true },
  { id: 6, name: "Chocolates", mandatory: true },
  { id: 7, name: "Cheese", mandatory: false },
];

const ShoppingCart = () => {
  const [allItems, setAllItems] = useState(true);

  return (
    <section>
      <h1>SHOPPING CART</h1>
      <ul>
        {itemsMandatory
          .filter((item) => (allItems ? true : item.mandatory) && item.name)
          .map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>

      <button type="button" onMouseOutCapture={() => setAllItems(true)}>
        All Items
      </button>
      <button type="button" onMouseOver={() => setAllItems(false)}>
        All Mandatory Items
      </button>
    </section>
  );
};

export default ShoppingCart;
