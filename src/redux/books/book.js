import React from 'react';
import Button from '../../components/button';

const clickHandler = () => {
  alert('Remove Book');
};

const Book = () => (
  <div className="books">
    <h1>Books components</h1>
    <Button click={clickHandler} value="Remove Book" />
  </div>
);

export default Book;
