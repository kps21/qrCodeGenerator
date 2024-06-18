import React, { useState } from "react";

const Cart = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleClick = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div>
      <h1>Number of Items in the cart : {cartCount}</h1>
      <button onClick={handleClick}>{cartCount} Add to Cart</button>
    </div>
  );
};

export default Cart;
