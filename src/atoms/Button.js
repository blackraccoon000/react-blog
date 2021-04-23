import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../styles/color';

const BtnDiv = styled.button.attrs((props) => {
  return {
    style: {
      height: `${props.height}px`,
      width: `${props.width}px`,
    },
  };
})`
  color: ${Color.WHITE};
  background-color: ${Color.BLACK};
`;

const Button = (props) => {
  return <BtnDiv {...props}>{props.value}</BtnDiv>;
};

Button.propTypes = {
  height: PropTypes.number,
  value: PropTypes.string,
  width: PropTypes.number,
};

Button.defaultProps = {
  height: 50,
  value: 'default',
  width: 200,
};

export default Button;
