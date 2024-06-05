import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PersonalBookshelf.css';

function PersonalBookshelf() {
  const [personalBookshelf, setPersonalBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setPersonalBookshelf(savedBookshelf);
  }, []);

  const handleRemoveBook = (bookKey) => {
    const updatedBookshelf = personalBookshelf.filter(book => book.key !== bookKey);
    setPersonalBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="container">
      <h1>MY BOOKSHELF</h1>
      <Link to="/">
        <button className="button-search">
          <span>Back to Search</span>
          </button>
      </Link>
      <br />
      <div className="bookshelf">
        {personalBookshelf.map((book) => (
          <div className="book-card" key={book.key}>
            <h3>{book.title}</h3>
            <p>Edition Count: {book.edition_count}</p>
            <button onClick={() => handleRemoveBook(book.key)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalBookshelf;
