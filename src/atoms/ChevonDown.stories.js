import React from 'react';
import ChevonDown from './ChevonDown';

export default {
  title: 'ATOMS/ChevonDown',
  component: ChevonDown,
  argTypes: {
    color: {
      control: 'color',
    },
    height: {
      control: {
        type: 'range',
        min: 5,
        max: 20,
        step: 1,
        default: 8,
      },
    },
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 20,
        step: 1,
        default: 15,
      },
    },
  },
};

const Template = (args) => <ChevonDown {...args} />;

export const Default = Template.bind({});
Default.args = {};
