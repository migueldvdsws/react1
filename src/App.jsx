import React, { useState } from 'react';
import PizzaList from './components/PizzaList';
import Cart from './components/Cart';
import { pizzas } from './components/pizzas';
import Navbar from './components/Navbar';  // Importar el Navbar
import Footer from './components/Footer';  // Importar el Footer
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  const [pizzaCart, setPizzaCart] = useState([]);

  // Función para agregar una pizza al carrito
  const addToCart = (pizza) => {
    const existingPizza = pizzaCart.find(item => item.id === pizza.id);
    if (existingPizza) {
      // Si la pizza ya está en el carrito, aumentar su cantidad
      setPizzaCart(pizzaCart.map(item => 
        item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Si no está en el carrito, agregarla con cantidad 1
      setPizzaCart([...pizzaCart, { ...pizza, quantity: 1 }]);
    }
  };

  // Función para eliminar una pizza completamente del carrito
  const removeFromCart = (id) => {
    setPizzaCart(pizzaCart.filter(item => item.id !== id));
  };

  // Función para reducir la cantidad de una pizza
  const decreaseQuantity = (id) => {
    setPizzaCart(pizzaCart.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar /> 

      {/* Componente PizzaList */}
      <PizzaList pizzas={pizzas} addToCart={addToCart} />

      {/* Componente Cart */}
      <Cart 
        pizzaCart={pizzaCart} 
        removeFromCart={removeFromCart} 
        decreaseQuantity={decreaseQuantity}
      />

      <Footer /> {/* Aquí agregamos el Footer */}
    </div>
  );
};

export default App;
