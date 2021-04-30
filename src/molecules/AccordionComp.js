import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ChevonDown from '../atoms/ChevonDown';

const Menu = styled.div.attrs((props) => {})`
  width: 200px;
  margin: 1em auto;
  padding: 0;

  & details {
    width: 100px;

    & summary {
      list-style: none;
    }
    &:hover + div {
      font-size: 100%;
      height: 100px;
      & a {
        color: red;
      }
    }
  }
`;

const MenuList = styled.div.attrs((props) => {})`
  font-size: 0;
  height: 0;
`;

const AccordionComp = (props) => {
  return (
    <Menu>
      <details>
        <summary>
          {props.title}
          <ChevonDown />
        </summary>
      </details>
      <MenuList>
        <a href={props.link}>{props.label}</a>
      </MenuList>
    </Menu>
  );
};

AccordionComp.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};

AccordionComp.defaultProps = {
  label: 'Ac Label',
  link: '#',
  title: 'Ac Btn',
};

export default AccordionComp;
