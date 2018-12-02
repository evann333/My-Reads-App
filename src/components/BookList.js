import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookShelf from '../BookShelf';

/**
 * Shows user's library as shelves with different books.
 */
function BookList (props) {

  const shelves = [
    { id: 'currentlyReading', name: 'Currently Reading' },
    { id: 'wantToRead', name: 'Wish List' },
    { id: 'read', name: 'Read' }
  ];

  /**
   * returns list of books that belong to the selected shelf.
   */
  let getBooksFromShelf = (shelf) => {
    return props.books
      .filter((book) => book.shelf === shelf)
  };

  return (
    <section data-page="user-books">
      <div className="container full-width">
          { shelves.map((shelf) => (
            <BookShelf
              key={shelf.id}
              title={shelf.name}
              onShelfChange={props.onShelfChange}
              books={getBooksFromShelf(shelf.id)} />
          ))}
      </div>
      <div className="floating-button open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </section>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
};

export default BookList;