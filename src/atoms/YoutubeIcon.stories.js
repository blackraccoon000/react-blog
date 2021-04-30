import React from 'react';
import YoutubeIcon from './YoutubeIcon';

export default {
  title: 'ATOMS/YoutubeIcon',
  component: YoutubeIcon,
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

const Template = (args) => <YoutubeIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
