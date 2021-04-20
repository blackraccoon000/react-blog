import React from 'react';
import Header from './Header';
import Color from '../styles/color';

export default {
  title: 'ORGANISMS/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
