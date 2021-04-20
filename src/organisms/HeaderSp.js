import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Color from '../styles/color';
import HeaderStart from '../molecules/HeaderStart';
import HeaderEnd from '../molecules/HeaderEnd';
import Slider from '../molecules/Slider';

const SiteHeader = styled.div`
  background: ${(props) => props.headerColor};
  border-bottom: 1px solid #e5e5e5;
  left: 0;
  top: 0;
  position: relative;
  width: 100%;
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
`;

const HeaderSp = ({
  bgColor,
  borderColor,
  borderSize,
  fontColor,
  fontSize,
  flag,
  headerColor,
  linkArray,
  lrFlag,
  size,
}) => {
  return (
    <SiteHeader headerColor={headerColor}>
      <HeaderContainer>
        <HeaderStart bgColor={bgColor} fontColor={fontColor} size={size} />
        <Slider
          bgColor={bgColor}
          flag={flag}
          fontColor={fontColor}
          fontSize={fontSize}
          linkArray={linkArray}
          lrFlag={lrFlag}
          size={size}
          onClickMe={() => {}}
        />
      </HeaderContainer>
    </SiteHeader>
  );
};

HeaderSp.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderSize: PropTypes.number,
  fontColor: PropTypes.string,
  fontSize: PropTypes.number,
  flag: PropTypes.bool,
  headerColor: PropTypes.string,
  linkArray: PropTypes.array,
  lrFlag: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

HeaderSp.defaultProps = {
  bgColor: Color.ORANGE,
  borderColor: Color.BLACK,
  borderSize: 2,
  fontColor: Color.BLACK,
  fontSize: 13,
  flag: false,
  headerColor: Color.BLUE,
  linkArray: [
    { linkPath: '/', linkName: 'home' },
    { linkPath: '/dashboard', linkName: 'dashboard' },
    { linkPath: '/help', linkName: 'help' },
  ],
  lrFlag: false,
  size: 'small',
};

export default HeaderSp;
