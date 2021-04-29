import React from 'react';
import Link from './Link';

export default {
  title: 'ATOMS/Link',
  component: Link,
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
        default: 100,
      },
    },
  },
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {};
