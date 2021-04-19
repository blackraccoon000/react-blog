import React from 'react';
import CrossButton from './CrossButton';
import Color from '../styles/color';

export default {
  title: 'ATOMS/CrossButton',
  component: CrossButton,
  argTypes: {
    onClickMe: { action: 'clicked' },
  },
};

const Template = (args) => <CrossButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  crossSpanColor: Color.RED,
  crossSpanAfterColor: Color.BLUE,
  flag: false,
};

export const Before = Template.bind({});
Before.args = {
  crossSpanColor: Color.PINK,
  crossSpanAfterColor: Color.DEEP_PURPLE,
  flag: false,
};

export const After = Template.bind({});
After.args = {
  crossSpanColor: Color.PINK,
  crossSpanAfterColor: Color.DEEP_PURPLE,
  flag: true,
};
