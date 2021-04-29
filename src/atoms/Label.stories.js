import React from 'react';
import Label from './Label';

export default {
  title: 'ATOMS/Label',
  component: Label,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
    fontSize: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 1,
        default: 21,
      },
    },
    fontFamily: {
      options: ['sans-serif', 'Bangers'],
      control: {
        type: 'radio',
        labels: {
          'sans-serif': 'sans-serif',
          Bangers: 'Bangers',
        },
      },
    },
  },
  decorators: [
    (Story) => {
      Story.displayName = 'Label';
      return (
        <div style={{ margin: '20px' }}>
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor: '',
  labelValue: 'Hello Storybook',
};
