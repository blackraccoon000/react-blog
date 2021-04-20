import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import Color from '../styles/color';

const OverlayDiv = styled.div`
  position: fixed;
  z-index: ${(props) => props.zIndex};
  width: ${(props) => (props.flag ? 100 : 0)}%;
  height: 100%;
  background-color: ${(props) => transparentize(props.opacity, props.color)};
  opacity: ${(props) => (props.flag ? 1 : 0)};
  transform: ${(props) =>
    props.flag ? 'none' : 'translate3d(100%, 0px, 0px)'};
  transition: opacity 0.3s ease 0s;
  top: 0;
  left: 0;
`;

const Overlay = ({ color, flag, opacity, zIndex }) => {
  return (
    <OverlayDiv color={color} flag={flag} opacity={opacity} zIndex={zIndex} />
  );
};

Overlay.propTypes = {
  /**
   * Overlay Color
   */
  color: PropTypes.string,
  /**
   * 表示判定
   */
  flag: PropTypes.bool,
  /**
   * Overlay Opacity
   */
  opacity: PropTypes.number,
  /**
   * z-index
   */
  zIndex: PropTypes.number,
};

Overlay.defaultProps = {
  color: Color.BLACK,
  flag: false,
  opacity: 0.3,
  zIndex: 0,
};

export default Overlay;
