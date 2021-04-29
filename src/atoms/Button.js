import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../styles/color';
import '../styles/fonts.css';

const BtnDiv = styled.button.attrs((props) => {
  const { backgroundColor, color, fontFamily, fontSize, height, width } = props;
  return {
    style: {
      backgroundColor,
      color,
      fontFamily,
      fontSize: `${fontSize}px`,
      height: `${height}px`,
      width: `${width}px`,
    },
  };
})`
  background-color: ${Color.BLACK};
`;

const Button = (props) => {
  return <BtnDiv {...props}>{props.value}</BtnDiv>;
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  height: PropTypes.number,
  value: PropTypes.string,
  width: PropTypes.number,
};

Button.defaultProps = {
  backgroundColor: Color.BLACK,
  color: Color.WHITE,
  fontFamily: 'Bangers',
  fontSize: 20,
  height: 50,
  value: 'default',
  width: 200,
};

export default Button;
