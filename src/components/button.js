import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, click }) => (
  <button type="button" className="btn" onClick={click}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string,
  click: PropTypes.func,

};

Button.defaultProps = {
  value: '',
  click: () => '',

};

export default Button;
