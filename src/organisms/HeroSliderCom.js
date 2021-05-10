import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import HeroImg from '../atoms/HeroImg';

const HeroAria = styled.div`
  background-color: #fafbfc;
  display: flex;
  height: 500px;
  justify-content: center;
  left: 0;
  padding: 20px;
  position: relative;
  top: 0;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 600px;
  max-width: 1200px;
  margin: 0 auto;
`;

const status = {
  axis: 'horizontal',
  animationHandler: 'fade',
  centerMode: true,
  centerSlidePercentage: 60,
  swipeable: true, // ok
  showArrows: true, // ok
  showStatus: false, // ok
  showIndicators: true, // ok
  infiniteLoop: true, // ok
  showThumbs: false, // ok
  useKeyboardArrows: true, // ok
  autoPlay: true, // ok
  stopOnHover: true, // ok
  dynamicHeight: true, // ok
  emulateTouch: true, // ok
  autoFocus: false, // ok
  thumbWidth: 100, // ok サムネサイズ
  selectedItem: 0, // ?
  interval: 2000,
  transitionTime: 500,
  swipeScrollTolerance: 5, // ok
  width: '1280px',
};

const HeroSliderCom = (props) => {
  return (
    <HeroAria>
      <Reset />
      <Container>
        <HeroImg {...status} />
      </Container>
    </HeroAria>
  );
};

export default HeroSliderCom;
