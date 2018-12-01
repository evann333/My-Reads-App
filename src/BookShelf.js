import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BookShelf (props) {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map((book) => (
              <BookItem key={book.id} book={book}
                onShelfChange={props.onShelfChange} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
  
  BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };

export default BookShelf;