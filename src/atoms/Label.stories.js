import React from 'react';
import Label from './Label';
import Color from '../styles/color';
import { rgba } from 'polished';

export default {
  title: 'ATOMS/Label',
  component: Label,
  argTypes: {
    fontColor: {
      control: 'color',
    },
    fontSize: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    backgroundColor: {
      control: 'color',
    },
    onCall: { action: 'clicked' },
  },
  decorators: [
    (Label) => (
      <div style={{ margin: '20px' }}>
        <Label />
      </div>
    ),
  ],
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: rgba(195, 19, 19, 0.35),
  fontColor: rgba(193, 53, 53, 0.9),
  fontSize: 21,
  htmlFor: '',
  labelValue: 'Hello Storybook',
};

// args=fontColor:!hex(507898)
