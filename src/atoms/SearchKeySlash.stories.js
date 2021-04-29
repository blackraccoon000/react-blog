import React from 'react';
import SearchKeySlash from './SearchKeySlash';

export default {
  title: 'ATOMS/SearchKeySlash',
  component: SearchKeySlash,
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

const Template = (args) => <SearchKeySlash {...args} />;

export const Default = Template.bind({});
Default.args = {};
