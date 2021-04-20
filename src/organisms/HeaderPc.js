import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Color from '../styles/color';
import HeaderStart from '../molecules/HeaderStart';
import HeaderEnd from '../molecules/HeaderEnd';

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
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

const HeaderPc = ({
  bgColor,
  fontColor,
  size,
  borderColor,
  borderSize,
  fontSize,
  linkArray,
  headerColor,
}) => {
  return (
    <SiteHeader headerColor={headerColor}>
      <HeaderContainer>
        <HeaderStart bgColor={bgColor} fontColor={fontColor} size={size} />
        <HeaderEnd
          borderColor={borderColor}
          borderSize={borderSize}
          fontColor={fontColor}
          fontSize={fontSize}
          linkArray={linkArray}
        />
      </HeaderContainer>
    </SiteHeader>
  );
};

HeaderPc.propTypes = {
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderColor: PropTypes.string,
  borderSize: PropTypes.number,
  fontSize: PropTypes.number,
  linkArray: PropTypes.array,
  headerColor: PropTypes.string,
};

HeaderPc.defaultProps = {
  bgColor: Color.ORANGE,
  headerColor: Color.BLUE,
  fontColor: Color.BLACK,
  size: 'small',
  borderColor: Color.BLACK,
  borderSize: 2,
  fontSize: 13,
  linkArray: [
    { linkPath: '/', linkName: 'home' },
    { linkPath: '/dashboard', linkName: 'dashboard' },
    { linkPath: '/help', linkName: 'help' },
  ],
};

export default HeaderPc;
