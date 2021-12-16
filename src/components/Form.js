import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBookToApi } from '../redux/books/books';

const AddBooks = () => {
  const [value, setValue] = useState('');
  const [categoryValue, setCategory] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
      title: value,
      category: categoryValue,
    };

    dispatch(addBookToApi(newBook));
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  return (
    <form>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="ADD NEW BOOK" />
      <select name="books" id="book" value={categoryValue} onChange={categoryHandler}>
        <option>Category</option>
        <option value="">Select</option>
        <option value="Action">Action</option>
        <option value="Science fiction">Science fiction</option>
        <option value="Economy">Economy</option>
        <option value="Computer Science">Computer Science</option>
      </select>
      <input type="button" value="Add Book" onClick={submitBookToStore} />
    </form>
  );
};

export default AddBooks;
