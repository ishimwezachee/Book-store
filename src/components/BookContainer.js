import { useDispatch } from 'react-redux';
// import your Action Creators
import React from 'react';
import { addBook, removeBook } from '../redux/books/books';

function BookContainer() {
  const dispatch = useDispatch();

  const submitBookToStore = (id, title, author) => {
    const newBook = {
      id,
      title,
      author,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <h2>Book container </h2>
      <input type="text" onChange={handleChange} value={}/>
      <button type="button" onClick={submitBookToStore}>Add Book</button>
    </div>
  );
}

export default BookContainer;
