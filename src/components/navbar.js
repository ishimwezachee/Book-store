import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <ul className="nav">
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categores</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
