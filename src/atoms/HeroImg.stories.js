import React from 'react';
import HeroImg from './HeroImg';

export default {
  title: 'ATOMS/HeroImg',
  component: HeroImg,
  argTypes: {},
  decorators: [
    (Story) => {
      Story.displayName = 'ContentBox';
      return (
        <div
          style={{
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            height: '700px',
            justifyContent: 'center',
            margin: '0 auto',
            padding: '50px 50px',
            width: '1400px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <HeroImg {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Fade = Template.bind({});
Fade.args = {
  animationHandler: 'fade',
  swipeable: false,
  showArrows: true,
  showStatus: true,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: true,
  useKeyboardArrows: true,
  autoPlay: true,
  stopOnHover: true,
  dynamicHeight: true,
  emulateTouch: true,
  autoFocus: false,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 2000,
  transitionTime: 500,
  swipeScrollTolerance: 5,
};

export const Custom = Template.bind({});
Custom.args = {
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
