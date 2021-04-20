import React from 'react';
import Slider from './Slider';
import Color from '../styles/color';

export default {
  title: 'MOLECULES/Slider',
  component: Slider,
  argTypes: {
    onClickMe: { action: 'clicked' },
  },
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgColor: Color.GREY,
  flag: false,
  fontColor: Color.DEEP_PURPLE,
  linkArray: [{ linkPath: '/', linkName: 'home' }],
  size: 'small',
};

export const Link3Path = Template.bind({});
Link3Path.args = {
  bgColor: Color.GREY,
  flag: false,
  fontColor: Color.DEEP_PURPLE,
  linkArray: [
    { linkPath: '/', linkName: 'home' },
    { linkPath: '/dashboard', linkName: 'dashboard' },
    { linkPath: '/help', linkName: 'help' },
  ],
  size: 'small',
};

export const Link3PathSizeM = Template.bind({});
Link3PathSizeM.args = {
  bgColor: Color.GREY,
  flag: false,
  fontColor: Color.DEEP_PURPLE,
  linkArray: [
    { linkPath: '/', linkName: 'home' },
    { linkPath: '/dashboard', linkName: 'dashboard' },
    { linkPath: '/help', linkName: 'help' },
  ],
  size: 'medium',
};

export const Link3PathSizeL = Template.bind({});
Link3PathSizeL.args = {
  bgColor: Color.GREY,
  flag: false,
  fontColor: Color.DEEP_PURPLE,
  linkArray: [
    { linkPath: '/', linkName: 'home' },
    { linkPath: '/dashboard', linkName: 'dashboard' },
    { linkPath: '/help', linkName: 'help' },
  ],
  size: 'large',
};
