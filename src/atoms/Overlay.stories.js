import React from 'react';
import Overlay from './Overlay';
import Color from '../styles/color';

export default {
  title: 'ATOMS/Overlay',
  component: Overlay,
};

const Template = (args) => <Overlay {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: Color.BLACK,
  flag: false,
  opacity: 0.3,
  zIndex: 0,
};

export const DifferentColor = Template.bind({});
DifferentColor.args = {
  color: Color.PINK,
  flag: false,
  opacity: 0.6,
  zIndex: 0,
};
