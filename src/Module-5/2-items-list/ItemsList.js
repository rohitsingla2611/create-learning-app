import React from "react";
import Item from "./Item";
import { laptopDetails } from "./collections";

const ItemsList = () => {
  return (
    <section className="laptopList">
      {laptopDetails.map((laptop) => (
        <Item key={laptop.id} {...laptop} />
      ))}
    </section>
  );
};

export default ItemsList;
