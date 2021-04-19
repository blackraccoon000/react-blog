import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  color: white;
`;

const Message = styled.p`
  color: black;
  font-size: 10px;
`;

const ClickButton = styled.button`
  color: black;
  background-color: white;
  font-size: 15px;
  border-color: yellow;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

// Use Title and Wrapper like any other React component – except they're styled!
const StyleComponent = () => {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Message>this is message</Message>
      <ClickButton>Button</ClickButton>
    </Wrapper>
  );
};

export default StyleComponent;
