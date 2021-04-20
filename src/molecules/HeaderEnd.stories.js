import React from 'react';
import HeaderEnd from './HeaderEnd';
import Color from '../styles/color';

export default {
  title: 'MOLECULES/HeaderEnd',
  component: HeaderEnd,
};

const Template = (args) => <HeaderEnd {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontColor: Color.BLACK,
  fontSize: 13,
  linkArray: [
    { linkPath: '/', linkName: 'home' },
    { linkPath: '/dashboard', linkName: 'dashboard' },
    { linkPath: '/help', linkName: 'help' },
  ],
};
