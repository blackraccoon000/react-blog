import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../styles/color';
import Logo from '../img/playwell-logo-63_49_brown.png';
import { headerStartSize } from '../styles/size';

const SiteTitle = styled.div`
  align-items: center;
  background-color: transparent;
  border-radius: ${(props) => props.radius}px;
  display: flex;
  height: ${(props) => props.divSize}px;
  justify-content: center;
  margin: 0;
  width: ${(props) => props.divSize}px;

  & h1 {
    font-size: 0;
    font-family: 'Dancing Script', cursive;
    margin: 0;
    text-align: center;
  }

  & a {
    color: ${(props) => props.fontColor};
    text-decoration: none;
  }
`;

const HeaderStart = ({ bgColor, fontColor, size, logoString }) => {
  const siteTitleSize =
    size === 'small'
      ? headerStartSize.small
      : size === 'medium'
      ? headerStartSize.medium
      : size === 'large'
      ? headerStartSize.large
      : '';
  return (
    <SiteTitle bgColor={bgColor} fontColor={fontColor} {...siteTitleSize}>
      <h1 rel="home">
        <img
          style={{ width: '100%', height: '100%' }}
          src={Logo}
          alt="sample image"
        />
        <a href="/">{logoString}</a>
      </h1>
    </SiteTitle>
  );
};

HeaderStart.propTypes = {
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  logoString: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

HeaderStart.defaultProps = {
  bgColor: Color.ORANGE,
  fontColor: Color.WHITE,
  logoString: 'PlayWell',
  size: 'small',
};

export default HeaderStart;
