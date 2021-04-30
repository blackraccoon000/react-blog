import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuUnordered = styled.ul.attrs((props) => {})`
  width: 200px;
  margin: 1em auto;
  padding: 0;

  & li {
    list-style: none;

    & a {
      display: table;
      margin-top: 1px;
      padding: 14px 10px;
      width: 100%;
      /* background: #4ab3d9; */
      text-decoration: none;
      /* text-align: left;
      vertical-align: middle; */
      /* color: #fff; */
      /* overflow: hidden; */
      /* transition: all 0.5s ease-out; */

      /* &:hover {
        background: #93dbf5;
        transition: all 0.5s ease-out;
      } */
    }

    & ul {
      margin: 0;
      padding: 0;
    }

    & li a {
      // サブメニューラベル
      display: block;
      margin-top: 0;
      padding: 0 10px;
      height: 0; // サブメニューホバー前
      background: #afeeee;
      color: #1f3d39;
      transition: all 0.5s ease-out;
    }
  }

  & > li {
    &:hover li a {
      /* display: table;
      margin-top: 1px;
      padding: 10px; */
      /* width: 100%; */
      height: 1em; // サブメニューホバー後
      /* transition: all 0.5s ease-out; */

      &:hover {
        // サブメニューラベル　ホバー
        background: #b0e0e6;
        transition: all 0.5s ease-out;
      }
    }
  }
`;

const MainMenu = (props) => {
  const { mainMenuTitle, subMenuItem } = props.mainArray;
  return (
    <li key={mainMenuTitle.label}>
      <a href={mainMenuTitle.link}>{mainMenuTitle.label}</a>
      <ul>
        {subMenuItem.map((subArray) => (
          <SubMenu key={subArray.label} subArray={subArray} />
        ))}
      </ul>
    </li>
  );
};

const SubMenu = (props) => {
  const { label, link } = props.subArray;
  return (
    <li key={label}>
      <a href={link}>{label}</a>
    </li>
  );
};

const AccordionTest = (props) => {
  return (
    <MenuUnordered>
      {props.accordionArray.map((mainArray) => (
        <MainMenu key={mainArray.mainMenuTitle.label} mainArray={mainArray} />
      ))}
    </MenuUnordered>
  );
};

AccordionTest.propTypes = {
  accordionArray: PropTypes.array,
};

AccordionTest.defaultProps = {
  accordionArray: [
    {
      mainMenuTitle: {
        link: '#',
        label: 'メニュー1',
      },
      subMenuItem: [
        {
          link: '#',
          label: 'サブメニュー1',
        },
        {
          link: '#',
          label: 'サブメニュー2',
        },
        {
          link: '#',
          label: 'サブメニュー3',
        },
      ],
    },
  ],
};

export default AccordionTest;
