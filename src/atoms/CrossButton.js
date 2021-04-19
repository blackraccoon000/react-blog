import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../styles/color';

const CrossDiv = styled.div`
  height: 20px;
  position: relative;
  transition-duration: 1s;
  width: 20px;
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
  z-index: 1;
`;

const MixinHamburgerIconPseudo = css`
  background-color: ${(props) =>
    props.flag ? props.crossSpanAfterColor : props.crossSpanColor};
  content: '';
  display: inline-block;
  height: 18px;
  position: absolute;
  transform: rotate(0deg);
  transition-duration: 1s;
  width: 3px;
`;

const HamburgerIcon = styled.span`
  position: absolute;
  left: 8px;
  top: 0px;

  &::before {
    ${MixinHamburgerIconPseudo}
    transform: ${(props) => (props.flag ? 'rotate(45deg)' : 'rotate(225deg)')};
  }
  &::after {
    ${MixinHamburgerIconPseudo}
    transform: ${(props) =>
      props.flag ? 'rotate(-45deg)' : 'rotate(-225deg)'};
  }
`;

const CrossButton = ({
  crossSpanColor,
  crossSpanAfterColor,
  onClickMe,
  flag,
}) => {
  return (
    <CrossDiv>
      <TransparentButton onClick={onClickMe}>
        ${flag} ? "開く" : "閉じる"
      </TransparentButton>
      <HamburgerIcon
        crossSpanColor={crossSpanColor}
        crossSpanAfterColor={crossSpanAfterColor}
        flag={flag}
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
};

CrossButton.defaultProps = {
  crossSpanColor: Color.RED,
  crossSpanAfterColor: Color.BLUE,
  flag: false,
};

export default CrossButton;
