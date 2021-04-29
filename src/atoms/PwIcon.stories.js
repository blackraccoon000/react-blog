import React from 'react';
import PwIcon from './PwIcon';

export default {
  title: 'ATOMS/PwIcon',
  component: PwIcon,
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
        default: 30,
      },
    },
  },
};

const Template = (args) => <PwIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
