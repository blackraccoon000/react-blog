import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../styles/color';
import { crossButtonSize } from '../styles/button-size';

const CrossDiv = styled.div`
  height: ${(props) => props.divSize}px;
  position: relative;
  transition-duration: 1s;
  width: ${(props) => props.divSize}px;
  z-index: 110;
`;

const TransparentButton = styled.button`
  background: transparent;
  border: none;
  font-size: 0;
  height: 100%;
  outline: none;
  position: absolute;
  padding: 0;
  width: 100%;
`;

const MixinHamburgerIconPseudo = css`
  background-color: ${(props) =>
    props.flag ? props.crossSpanAfterColor : props.crossSpanColor};
  content: '';
  display: inline-block;
  height: ${(props) => props.spanHeight}px;
  position: absolute;
  transform: rotate(0deg);
  transition-duration: 1s;
  width: ${(props) => props.spanWidth}px;
`;

const HamburgerIcon = styled.span`
  background-color: ${(props) =>
    props.flag ? 'transparent' : props.crossSpanColor};
  height: ${(props) => (props.flag ? 'none' : props.spanHeight)}px;
  position: absolute;
  transition-duration: 1s;
  left: ${(props) => props.spanPositionLeft}px;
  top: ${(props) => props.spanPositionTop}px;
  width: ${(props) => (props.flag ? 0 : props.spanWidth)}px;

  &::before {
    ${MixinHamburgerIconPseudo}
    top: ${(props) => (props.flag ? 0 : props.spanBeforeTop)}px;
    transform: ${(props) => (props.flag ? 'rotate(225deg)' : 'rotate(0deg)')};
  }
  &::after {
    ${MixinHamburgerIconPseudo}
    top: ${(props) => (props.flag ? 0 : props.spanAfterTop)}px;
    transform: ${(props) => (props.flag ? 'rotate(-225deg)' : 'rotate(0deg)')};
  }
`;

const CrossButton = ({
  crossSpanColor,
  crossSpanAfterColor,
  onClickMe,
  flag,
  size,
}) => {
  const iconSize =
    size === 'small'
      ? crossButtonSize.small
      : size === 'medium'
      ? crossButtonSize.medium
      : size === 'large'
      ? crossButtonSize.large
      : '';
  return (
    <CrossDiv {...iconSize}>
      <TransparentButton onClick={onClickMe}>
        {flag ? '開く' : '閉じる'}
      </TransparentButton>
      <HamburgerIcon
        crossSpanColor={crossSpanColor}
        crossSpanAfterColor={crossSpanAfterColor}
        flag={flag}
        {...iconSize}
      />
    </CrossDiv>
  );
};

CrossButton.propTypes = {
  /**
   * flag=false時のspanタグの色を指定する。
   */
  crossSpanColor: PropTypes.string,
  /**
   * flag=true時のspanタグの色を指定する。
   */
  crossSpanAfterColor: PropTypes.string,
  /**
   * buttonタグ押下時に発火する関数を渡す。
   */
  onClickMe: PropTypes.func.isRequired,
  /**
   * 押下判定を取る。未押下時false / 押下時true
   */
  flag: PropTypes.bool,
  /**
   * CrossButtonのサイズ
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

CrossButton.defaultProps = {
  crossSpanColor: Color.RED,
  crossSpanAfterColor: Color.BLUE,
  size: 'small',
  flag: false,
};

export default CrossButton;
