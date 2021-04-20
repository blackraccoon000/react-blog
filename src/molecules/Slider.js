import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../styles/color';
import CrossButton from '../atoms/CrossButton';
import Item from '../atoms/Item';
import Overlay from '../atoms/Overlay';

const SliderDiv = styled.div`
  position: relative;
`;

const LeftMove = css`
  left: ${(props) =>
    props.flag
      ? props.size == 'small'
        ? 250
        : props.size == 'medium'
        ? 240
        : props.size == 'large'
        ? 230
        : 0
      : 0}px;
`;

const RightMove = css`
  right: ${(props) =>
    props.flag
      ? props.size == 'small'
        ? 250
        : props.size == 'medium'
        ? 240
        : props.size == 'large'
        ? 230
        : 0
      : 0}px;
`;

const MovingDiv = styled.div`
  position: absolute;
  ${(props) => (props.lrFlag ? LeftMove : RightMove)}
  transition: all 0.8s ease 0s;
`;

const LeftMenu = css`
  left: 0;
`;

const RightMenu = css`
  right: 0;
`;

const MenuDiv = styled.div`
  background: ${(props) => props.bgColor};
  padding: 2.5em 1.5em 0;
  height: 100%;
  width: ${(props) => (props.flag ? 300 : 0)}px;
  box-sizing: border-box;
  overflow: auto;
  position: fixed;
  transition: all 0.8s ease 0s;
  top: 0;
  ${(props) => (props.lrFlag ? LeftMenu : RightMenu)}
  opacity: ${(props) => (props.flag ? 1 : 0)};
  z-index: 100;
`;

const ItemListNav = styled.nav``;

const Slider = ({
  bgColor,
  flag,
  linkArray,
  onClickMe,
  size,
  fontColor,
  fontSize,
  lrFlag,
}) => {
  return (
    <SliderDiv>
      <MovingDiv flag={flag} size={size} lrFlag={lrFlag}>
        <CrossButton flag={flag} onClickMe={onClickMe} size={size} />
      </MovingDiv>
      <MenuDiv bgColor={bgColor} flag={flag} lrFlag={lrFlag}>
        <ItemListNav>
          {linkArray.map((link) => (
            <Item
              key={link.linkName}
              linkPath={link.linkPath}
              linkName={link.linkName}
              fontColor={fontColor}
              fontSize={fontSize}
            />
          ))}
        </ItemListNav>
      </MenuDiv>
      <Overlay flag={flag} />
    </SliderDiv>
  );
};

Slider.propTypes = {
  /**
   * 背景色
   */
  bgColor: PropTypes.string,
  /**
   * 表示判定
   */
  flag: PropTypes.bool,
  /**
   * Font色指定
   */
  fontColor: PropTypes.string,
  /**
   * FontSize指定
   */
  fontSize: PropTypes.number,
  /**
   * Link配列
   */
  linkArray: PropTypes.array,
  /**
   * 左右判定
   */
  lrFlag: PropTypes.bool,
  /**
   * HamburgerMenu Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Slider.defaultProps = {
  bgColor: Color.GREY,
  flag: false,
  fontColor: Color.DEEP_PURPLE,
  fontSize: 20,
  linkArray: [{ linkPath: '/', linkName: 'home' }],
  lrFlag: false,
  size: 'small',
};

export default Slider;
