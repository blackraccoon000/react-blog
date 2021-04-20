import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../styles/color';

const ItemA = styled.a`
  display: block;
  padding: 0.8em;
  color: ${(props) => props.fontColor};
  text-decoration: none;
`;

const ItemSpan = styled.span`
  box-sizing: border-box;
  margin-left: 10px;
  font-size: ${(props) => props.fontSize}px;
  font-weight: 700;
`;

const Item = ({ fontColor, fontSize, linkPath, linkName }) => {
  return (
    <ItemA href={linkPath} fontColor={fontColor}>
      <ItemSpan fontSize={fontSize}>{linkName}</ItemSpan>
    </ItemA>
  );
};
Item.propTypes = {
  /**
   * font色指定
   */
  fontColor: PropTypes.string,
  /**
   *
   */
  fontSize: PropTypes.number,
  /**
   * Link Path
   */
  linkPath: PropTypes.string,
  /**
   * Link Name
   */
  linkName: PropTypes.string,
};

Item.defaultProps = {
  fontColor: Color.DEEP_PURPLE,
  fontSize: 20,
  linkPath: '/',
  linkName: 'Home',
};

export default Item;
