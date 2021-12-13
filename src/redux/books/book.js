import React from 'react';
import Button from '../../components/button';
import AddBooks from '../../components/addBook';

const clickHandler = () => {
  alert('Remove Book');
};

const Book = () => (
  <div className="books">
    <h1>List of Books</h1>
    <AddBooks />
    <Button click={clickHandler} value="Remove Book" />
  </div>
);

export default Book;
