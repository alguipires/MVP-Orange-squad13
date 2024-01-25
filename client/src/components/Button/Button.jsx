import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {
      value,
      type,
      onClick,
      test,
      disabled,
      className,
      id,
      style,
    } = this.props;
    return (
      <button
        className={ className }
        type={ type }
        onClick={ onClick }
        data-testid={ test }
        disabled={ disabled }
        id={ id }
        style={ style }
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  test: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string || PropTypes.number,
  style: PropTypes.shape({
    position: PropTypes.string,
    bottom: PropTypes.string,
  }),
}.isRequired;

Button.defaultProps = {
  type: 'button',
  value: '',
  test: '',
  className: '',
  disabled: false,
  onClick: () => {},
  id: '',
  style: {} || '',
};

export default Button;
