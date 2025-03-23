import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import Home from './components/Home';  
import PizzaList from './components/PizzaList';  // Importa el componente de lista de pizzasS
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar /> 
        <div className="flex-grow-1 container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/pizzas" element={<PizzaList />} />  
       
          </Routes>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
