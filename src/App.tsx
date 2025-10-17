import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import NavBar from './components/Navigation';
import About from './components/About';
import Home from './components/Home';

import './App.css';

function App() {
  return (

    <div>

      <Router>

        <NavBar></NavBar>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/addProduct" element={<ProductForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
     </Router>

    </div>
     
  );
}

export default App;
