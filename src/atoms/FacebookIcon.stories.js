import React from 'react';
import FacebookIcon from './FacebookIcon';

export default {
  title: 'ATOMS/FacebookIcon',
  component: FacebookIcon,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 200,
        step: 10,
        default: 24,
      },
    },
  },
};

const Template = (args) => <FacebookIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
