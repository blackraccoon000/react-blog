import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../styles/color';
import CrossButton from '../atoms/CrossButton';
import Item from '../atoms/Item';
import Overlay from '../atoms/Overlay';

const SliderDiv = styled.div`
  position: relative;
`;

const MovingDiv = styled.div`
  position: absolute;
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
  transition: all 0.8s ease 0s;
`;

const MenuDiv = styled.div`
  background: ${(props) => props.bgColor};
  padding: 2.5em 1.5em 0;
  /* font-size: 1.15em; */
  height: 100%;
  width: ${(props) => (props.flag ? 300 : 0)}px;
  box-sizing: border-box;
  overflow: auto;
  position: fixed;
  transition: all 0.8s ease 0s;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.flag ? 1 : 0)};
  z-index: 100;
`;

const ItemListNav = styled.nav``;

const Slider = ({ bgColor, flag, linkArray, onClickMe, size, fontColor }) => {
  return (
    <SliderDiv>
      <MovingDiv flag={flag} size={size}>
        <CrossButton flag={flag} onClickMe={onClickMe} size={size} />
      </MovingDiv>
      <MenuDiv bgColor={bgColor} flag={flag}>
        <ItemListNav>
          {linkArray.map((link) => (
            <Item
              key={link.linkName}
              linkPath={link.linkPath}
              linkName={link.linkName}
              fontColor={fontColor}
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
   * Link配列
   */
  linkArray: PropTypes.array,
  /**
   * HamburgerMenu Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Slider.defaultProps = {
  bgColor: Color.GREY,
  flag: false,
  fontColor: Color.DEEP_PURPLE,
  linkArray: [{ linkPath: '/', linkName: 'home' }],
  size: 'small',
};

export default Slider;
