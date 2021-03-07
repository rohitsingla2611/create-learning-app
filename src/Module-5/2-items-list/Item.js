import React from "react";

const Item = ({brand,img,ram,price}) => {
    return (
    <article className="laptop">
      <img src={img} alt=""/>
      <h1>{brand}</h1>
      <h3>RAM {ram}</h3>
      <h2>Price &#8377; {price}</h2>
    </article>
  );
};

export default Item; 
