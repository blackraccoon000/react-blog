import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { transparentize, rgba } from 'polished';
import Color from '../styles/color';
import '../styles/fonts.css';

const LabelBox = styled.label.attrs((props) => {
  const { backgroundColor, color, fontFamily, fontSize } = props;
  return {
    style: {
      backgroundColor,
      color,
      fontFamily,
      fontSize,
    },
  };
})`
  margin: 0;
  padding: 10px;
  border-radius: 10px;
`;

const Label = (props) => {
  const { labelValue } = props;
  return <LabelBox {...props}> {labelValue}</LabelBox>;
};

Label.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  htmlFor: PropTypes.string,
  labelValue: PropTypes.string.isRequired,
};

Label.defaultProps = {
  backgroundColor: Color.BLACK,
  color: Color.WHITE,
  fontFamily: 'Bangers',
  fontSize: 21,
  htmlFor: '',
  labelValue: 'Play Well',
};

export default Label;
