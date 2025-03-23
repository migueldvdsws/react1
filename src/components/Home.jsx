import React from 'react';
import Header from './Header'; // Mantiene el Header con la imagen de fondo
import PizzaList from './PizzaList'; // Importa PizzaList para mostrar todas las pizzas
// no utilizo el elemento carpizza como dice el requerimiento cree otro que se llama PizzaList
const Home = () => {
  return (
    <div>
      <Header /> {/* Imagen de fondo o cabecera */}

      {/* Contenedor principal */}
      <div className="container mt-4">
        
        
        {/* Renderiza la lista completa de pizzas desde pizzas.js */}
        <PizzaList />
      </div>
    </div>
  );
};

export default Home;
