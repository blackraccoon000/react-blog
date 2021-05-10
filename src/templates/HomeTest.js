import React from 'react';
import styled from 'styled-components';
import HeaderCom from '../organisms/HeaderCom';
import FooterCom from '../organisms/FooterCom';
import HeroSliderCom from '../organisms/HeroSliderCom';
import ContentCards from '../organisms/ContentCards';

const HomeTest = (props) => {
  return (
    <>
      <HeaderCom />
      <HeroSliderCom />
      <ContentCards />
      <FooterCom />
    </>
  );
};

export default HomeTest;
