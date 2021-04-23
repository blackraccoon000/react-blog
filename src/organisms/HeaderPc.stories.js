import React from 'react';
import HeaderPc from './HeaderPc';
import Color from '../styles/color';

export default {
  title: 'ORGANISMS/HeaderPc',
  component: HeaderPc,
};

const Template = (args) => <HeaderPc {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Sample1 = Template.bind({});
Sample1.args = {
  bgColor: '#e9e3da',
  borderColor: '#bbb4b4',
  fontColor: '#a27b7b',
  headerColor: '#c7c7c7',
  size: 'large',
};
