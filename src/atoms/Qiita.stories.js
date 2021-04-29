import React from 'react';
import Qiita from './Qiita';

export default {
  title: 'ATOMS/Qiita',
  component: Qiita,
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

const Template = (args) => <Qiita {...args} />;

export const Default = Template.bind({});
Default.args = {};
