import React from 'react';
import EntryKeyword from './EntryKeyword';

export default {
  title: 'ATOMS/EntryKeyword',
  component: EntryKeyword,
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

const Template = (args) => <EntryKeyword {...args} />;

export const Default = Template.bind({});
Default.args = {};
