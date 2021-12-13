import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Categories from './redux/categories/categories';
import Books from './redux/books/book';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
