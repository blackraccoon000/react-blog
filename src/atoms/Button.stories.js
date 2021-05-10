import React from 'react';
import Button from './Button';

export default {
  title: 'ATOMS/Button',
  component: Button,
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
        default: 15,
      },
    },
    height: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 1,
        default: 50,
      },
    },
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 500,
        step: 1,
        default: 200,
      },
    },
    fontFamily: {
      options: ['sans-serif', 'Bangers', 'source-code-pro'],
      control: {
        type: 'radio',
        labels: {
          'sans-serif': 'sans-serif',
          Bangers: 'Bangers',
          sourceCodePro: 'source-code-pro',
        },
      },
    },
  },
  decorators: [
    (Story) => {
      Story.displayName = 'Button';
      return (
        <div style={{ margin: '20px' }}>
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'default Template',
};
