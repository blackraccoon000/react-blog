import React from 'react';
import TwitterIcon from './TwitterIcon';

export default {
  title: 'ATOMS/TwitterIcon',
  component: TwitterIcon,
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

const Template = (args) => <TwitterIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
