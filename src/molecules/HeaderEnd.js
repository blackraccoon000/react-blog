import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Item from '../atoms/Item';
import Color from '../styles/color';

const HeaderNav = styled.nav`
  & ul {
    display: flex;
    list-style: none;
    margin: 0;
  }

  & li {
    font-size: ${(props) => props.fontSize}px;
    line-height: 22px;
    border: none;

    & a {
      border-left: ${(props) =>
        `${props.borderSize}px solid ${props.borderColor}`};
      padding: 8px 16px;
      text-align: center;
      text-decoration: none;
    }
  }
`;

const HeaderEnd = ({
  borderColor,
  borderSize,
  fontColor,
  fontSize,
  linkArray,
}) => {
  return (
    <HeaderNav
      borderColor={borderColor}
      borderSize={borderSize}
      fontSize={fontSize}
    >
      <ul>
        {linkArray.map((link) => (
          <li key={`${link.linkName}-li`}>
            <Item
              key={`${link.linkName}-item`}
              linkName={link.linkName}
              linkPath={link.linkPath}
              fontColor={fontColor}
            />
          </li>
        ))}
      </ul>
    </HeaderNav>
  );
};

HeaderEnd.propTypes = {
  borderColor: PropTypes.string,
  borderSize: PropTypes.number,
  fontColor: PropTypes.string,
  fontSize: PropTypes.number,
  linkArray: PropTypes.array,
};

HeaderEnd.defaultProps = {
  borderColor: Color.BLACK,
  borderSize: 2,
  fontColor: Color.BLACK,
  fontSize: 13,
  linkArray: [
    { linkPath: '/', linkName: 'home' },
    { linkPath: '/dashboard', linkName: 'dashboard' },
    { linkPath: '/help', linkName: 'help' },
  ],
};

export default HeaderEnd;
