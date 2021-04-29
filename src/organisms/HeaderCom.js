import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Reset } from 'styled-reset';
import HeaderComStart from '../molecules/HeaderComStart';
import HeaderComEnd from '../molecules/HeaderComEnd';

const Header = styled.header`
  background-color: #343535;
  border-bottom: 1px solid #e5e5e5;
  height: 70px;
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 600px;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderCom = (props) => {
  return (
    <Header>
      <Reset />
      <Container>
        <HeaderComStart />
        <HeaderComEnd />
      </Container>
    </Header>
  );
};

export default HeaderCom;
