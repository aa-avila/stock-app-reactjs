import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import ProductsCreate from './pages/ProductsCreate';
import ProductsEdit from './pages/ProductsEdit';
import ProductsDetail from './pages/ProductsDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/list" element={<ProductsList />} />
          <Route path="products/create" element={<ProductsCreate />} />
          <Route path="products/edit/*" element={<ProductsEdit />} />
          <Route path="products/detail/*" element={<ProductsDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
