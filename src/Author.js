import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';


/**
* React Component to Render a Book's Authors
*/
class Author extends Component {
  /**
  * Render Component into html
  */
  render() {
    const authors = this.props.author;
    return (
      <div>
        {authors ? authors.map((a, index) => (<div key={index} className='book-authors'>{a}</div>)) : <div></div>}
      </div>
    );
  }
}

Author.propTypes = {
  /**
  * Array of Authors for a book
  */
  author: PropTypes.array,
};

export default Author;