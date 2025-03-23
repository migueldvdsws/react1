import React from 'react';

const Cart = ({ pizzaCart, removeFromCart, decreaseQuantity }) => {
  return (
    <div className="cart">
      <h2>Carrito de Pizzas</h2>
      {pizzaCart.length === 0 ? (
        <p>No hay pizzas en el carrito</p>
      ) : (
        <ul>
          {pizzaCart.map((pizza) => (
            <li key={pizza.id}>
              <h5>{pizza.name}</h5>
              <p>Cantidad: {pizza.quantity}</p>
              <p>Precio: ${pizza.price * pizza.quantity}</p>
              <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
              <button onClick={() => decreaseQuantity(pizza.id)}>Reducir cantidad</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
