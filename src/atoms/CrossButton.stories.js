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

export const Default = Template.bind({});

export const BeforeColor = Template.bind({});
BeforeColor.args = {
  crossSpanColor: Color.PINK,
  crossSpanAfterColor: Color.DEEP_PURPLE,
  flag: false,
};

export const AfterColor = Template.bind({});
AfterColor.args = {
  crossSpanColor: Color.PINK,
  crossSpanAfterColor: Color.DEEP_PURPLE,
  flag: true,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  crossSpanColor: Color.PINK,
  crossSpanAfterColor: Color.DEEP_PURPLE,
  flag: false,
  size: 'small',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  crossSpanColor: Color.PINK,
  crossSpanAfterColor: Color.DEEP_PURPLE,
  flag: false,
  size: 'medium',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  crossSpanColor: Color.PINK,
  crossSpanAfterColor: Color.DEEP_PURPLE,
  flag: false,
  size: 'large',
};
