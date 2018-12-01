import React from 'react'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import Header from './components/Header';
import BookList from './components/BookList';
import SearchPage from './components/SearchPage';

import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    screen: '',
  };

  
  getBookShelf = (bookId) => {
    let foundBook = this.state.books
      .find((book) => book.id === bookId);
    return foundBook ? foundBook.shelf : 'none';
  };

  /**
   * Replace updated instance of a book in the local list held in this
   * component's state.
   */
  updateBookStatus = (book) => {
    const books = this.state.books.slice();
    const bookIndex = books
      .findIndex((item) => item.id === book.id);

    if (bookIndex !== -1) {
      if (book.shelf === 'none') {
        console.log(`"${book.title}" removed from shelves`);
        books.splice(bookIndex, 1);
      } else {
        console.log(`"${book.title}" moved to shelf "${book.shelf}"`);
        books[bookIndex] = book;
      }
    } else {
      console.log(`"${book.title}" added to shelf "${book.shelf}"`);
      books.push(book);
    }

    this.setState({ books });
  };

  /**
   * Moves a book to a new the shelf by calling the update method in the API.
   */

  moveBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.updateBookStatus(book);
      });
  };

  componentDidMount() {
    BooksAPI.getUserBooks()
      .then((books) => this.setState({ books }));
  }

  /**
   * Returns the view template of the component.
   */
  render() { 
    return (
      <div className="app">

        <Route path="/" render={({ location }) => (
            <Header currentPath={location.pathname} />
          )} />

        <main>
          { /* Book list page */ }
          <Route exact path="/" render={() => (
            <BookList
              books={this.state.books}
              onShelfChange={this.moveBookToShelf} />
          )} />

          { /* Search books page */ }
          <Route path="/search/:query?" render={({ match }) => (
            <SearchPage
              query={match.params.query}
              getBookShelf={this.getBookShelf}
              onShelfChange={this.moveBookToShelf}
              books={this.state.books} />
          )} />

        </main>
      </div>
    );
  }
}

export default BooksApp;