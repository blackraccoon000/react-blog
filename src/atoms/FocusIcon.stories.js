import React from 'react';
import FocusIcon from './FocusIcon';

export default {
  title: 'ATOMS/FocusIcon',
  component: FocusIcon,
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
        default: 20,
      },
    },
  },
};

const Template = (args) => <FocusIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
