import React from "react";

const Basket = ({
  basketItems,
  onClose,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  return (
    <div className="basket">
      <h2>Basket</h2>
      <div className="basket-items">
        {basketItems.map((item, index) => (
          <div key={index} className="basket-item">
            <img src={item.imageUrl} alt={item.name} width="350px" />
            <div>{item.name}</div>
            <div>{item.size}</div>
            <div>{item.price}</div>
            <div>
              Quantity: {item.quantity}
              <button onClick={() => onIncreaseQuantity(index)}>+</button>
              <button onClick={() => onDecreaseQuantity(index)}>-</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onClose}>Close Basket</button>
    </div>
  );
};

export default Basket;
