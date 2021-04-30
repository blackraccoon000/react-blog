import React from 'react';
import QiitaIcon from './QiitaIcon';

export default {
  title: 'ATOMS/QiitaIcon',
  component: QiitaIcon,
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

const Template = (args) => <QiitaIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
