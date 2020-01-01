import React from "react";

import "./checkout-item.styles.scss";

// this is component is going to receive a cartItem object as props
const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
