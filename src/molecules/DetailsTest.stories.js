import React from 'react';
import DetailsTest from './DetailsTest';

export default {
  title: 'MOLECULES/DetailsTest',
  component: DetailsTest,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'DetailsTest';
      return (
        <div
          style={{
            width: '500px',
            height: '500px',
            margin: '0 auto',
            padding: '50px 50px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <DetailsTest {...args} />;

export const Default = Template.bind({});
Default.args = {};
