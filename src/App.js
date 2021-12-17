import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Categories from './redux/categories/categories';
import BookList from './components/bookList';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
