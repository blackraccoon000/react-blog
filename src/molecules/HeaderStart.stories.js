import React from 'react';
import Color from '../styles/color';
import HeaderStart from './HeaderStart';

export default {
  title: 'MOLECULES/HeaderStart',
  component: HeaderStart,
};

const Template = (args) => <HeaderStart {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgColor: Color.ORANGE,
  fontColor: Color.WHITE,
};

export const Small = Template.bind({});
Small.args = {
  bgColor: Color.ORANGE,
  fontColor: Color.BLACK,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  bgColor: Color.ORANGE,
  fontColor: Color.BLACK,
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  bgColor: Color.ORANGE,
  fontColor: Color.BLACK,
  size: 'large',
};
