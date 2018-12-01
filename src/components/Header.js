import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Stateless component to render the application's header. This will determine
 * whether each of the buttons will be displayed or not depending on the path
 * received as a prop.
 */
function Header (props) {

  const { currentPath } = props;

  return (
    <header>
      {currentPath !== '/' && (<Link className="ico back-button" to="/"></Link>)}
      <h1>MyReads</h1>
    </header>
  );
}

Header.propTypes = {
  currentPath: PropTypes.string.isRequired
};

export default Header;