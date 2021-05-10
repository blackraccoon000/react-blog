import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Reset } from 'styled-reset';
import ChevonDown from '../atoms/ChevonDown';

const DropdownWrapper = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: column;
`;

const DropdownButton = styled.details.attrs((props) => {})`
  & > summary {
    color: #8b8c8e;
    cursor: pointer;
    font-size: 100%;
    font-weight: 800;
    list-style: none;
    margin: 20px;
    outline: none;
    padding: 7px;
    text-align: center;
    transition: 0.8s;
    width: 165px;
  }

  &[open] {
    & > summary:before {
      content: ' ';
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 50;
      background: transparent;
    }
    & + div {
      border: 2px solid rgb(28 113 199, 0.4);
      border-radius: 6px;
      max-height: 400px;
      opacity: 1;
    }
  }
`;

const DropdownMenu = styled.div.attrs((props) => {})`
  display: block;
  width: 200px;
  max-height: 0;
  padding: 8px;
  overflow: hidden;
  background: #eae8e8;
  border: 1px solid rgb(28 113 199);
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);
  opacity: 0;
  z-index: 100;
  transition: all 1s ease-out;

  & a:last-child {
    margin-bottom: 10px;
  }
`;

const OtherLinks = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
  };
})`
  color: #8b8c8e;
  display: block;
  font-size: 14px;
  font-weight: 400;
  padding: 16px 0 0 20px;
  pointer-events: auto;
  transition: 0.8s;
  text-decoration: none;

  &:hover {
    color: #311b92;
    font-weight: bold;
  }
`;

const DetailsTest = (props) => {
  return (
    <DropdownWrapper>
      <Reset />
      <DropdownButton>
        <summary>
          {props.summaryLabel}
          <ChevonDown color={'#8b8c8e'} />
        </summary>
      </DropdownButton>
      <DropdownMenu>
        {props.someLink.map((oneLink) => {
          return (
            <OtherLinks key={oneLink.linkLabel} link={oneLink.link}>
              {oneLink.linkLabel}
            </OtherLinks>
          );
        })}
      </DropdownMenu>
    </DropdownWrapper>
  );
};

DetailsTest.propTypes = {
  summaryLabel: PropTypes.string,
  someLink: PropTypes.array,
  link: PropTypes.string,
  linkLabel: PropTypes.string,
};

DetailsTest.defaultProps = {
  summaryLabel: 'What`s PlayWell?',
  someLink: [
    {
      link: '#',
      linkLabel: 'Link A',
    },
    {
      link: '#',
      linkLabel: 'Link B',
    },
    {
      link: '#',
      linkLabel: 'Link C',
    },
  ],
};

export default DetailsTest;
