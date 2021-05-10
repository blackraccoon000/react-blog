import React from 'react';
import ScheduleIcon from './ScheduleIcon';

export default {
  title: 'ATOMS/ScheduleIcon',
  component: ScheduleIcon,
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

const Template = (args) => <ScheduleIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
