import Button from './button';

const Book = (props) => {
  const hihihi = props;
  return (
    <div className="book">
      <div className="title">
        <article>
          <p>Action</p>
          <h2>{hihihi.title}</h2>
          <p>Author</p>
          <ul>
            <li>Comments</li>
            <li>
              <Button id={hihihi.id} />
            </li>
            <li>Edit</li>
          </ul>
        </article>
      </div>
      <div className="current">
        <h3>Current Chapter</h3>
        <h3><b>Chapter 17</b></h3>
        <input type="button" value="Update Progress" />
      </div>
    </div>
  );
};

export default Book;