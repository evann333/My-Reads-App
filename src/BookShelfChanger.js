import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';


class BookShelfChanger extends Component {
  state = {
    value: 'move',
    target: 'none',
  }

  /**
  * React Method to get book data once component mounts
  */
  componentDidMount() {
    this.setState(
        {value: this.props.book.shelf ? this.props.book.shelf : 'none'});
  }

  onChange = (event) => {
    this.setState({target: event.target.value});
    this.props.onShelfChange(this.props.book, event.target.value);
          this.setState(
              {value: this.props.book.shelf ? this.props.book.shelf : this.state.target}
          );
  }

  /**
  * Render Component into html
  */
  render() {
    return (
      <div className='book-shelf-changer'>
        <select id='setShelf' value={this.state.value} onChange={this.onChange}>
          <option value='move' disabled>Move to...</option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    );
  }
}

BookShelfChanger.propTypes = {
  /**
  * Function to Change shelf of a book
  */
  onShelfChange: PropTypes.func.isRequired,
  /**
  * Function to Change shelf of a book
  */
  onSearchUpdate: PropTypes.func,
  /**
  * Current Book
  */
  book: PropTypes.object.isRequired,
};

export default BookShelfChanger;