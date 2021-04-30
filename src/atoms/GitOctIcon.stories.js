import React from 'react';
import GitOctIcon from './GitOctIcon';

export default {
  title: 'ATOMS/GitOctIcon',
  component: GitOctIcon,
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

const Template = (args) => <GitOctIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
