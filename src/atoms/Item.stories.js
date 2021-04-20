import React from 'react';
import Item from './Item';
import Color from '../styles/color';

export default {
  title: 'ATOMS/Item',
  component: Item,
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontColor: Color.DEEP_PURPLE,
  linkPath: '/',
  linkName: 'Home',
};
