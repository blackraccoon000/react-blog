import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { transparentize, rgba } from 'polished';
import Color from '../styles/color';

const LabelBox = styled.label.attrs((props) => {
  const { backgroundColor, fontColor, fontSize } = props;
  const onCall = () => {
    console.log('aaa');
  };
  return {
    style: {
      backgroundColor,
      color: fontColor,
      fontSize,
    },
    onClick: onCall,
  };
})`
  margin: 0;
  padding: 10px;
  border-radius: 10px;
`;

const Label = (props) => {
  const { backgroundColor, fontColor, fontSize, htmlFor, labelValue } = props;
  return (
    <LabelBox
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      fontSize={fontSize}
      htmlFor={htmlFor}
    >
      {labelValue}
    </LabelBox>
  );
};

Label.propTypes = {
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  fontSize: PropTypes.number,
  htmlFor: PropTypes.string,
  labelValue: PropTypes.string.isRequired,
};

Label.defaultProps = {
  backgroundColor: rgba(0, 0, 0, 0),
  fontColor: rgba(0, 0, 0, 0),
  fontSize: 21,
  htmlFor: '',
  labelValue: 'Play Well',
};

export default Label;
