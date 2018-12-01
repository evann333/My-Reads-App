import React from 'react';
import PropTypes from 'prop-types';

/**
 * Stateless component to render a customized error message. If no props are
 * specified, a default message will be shown.
 */
function Whoops (props) {
  return (
    <section className="container" data-page="trouble-report">
      <h2>{props.title || 'Whoops!'}</h2>
      <p>{props.message || 'Well, not exactly what we were going for...'}</p>
    </section>
  );
}

Whoops.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

export default Whoops;