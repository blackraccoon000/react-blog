import React from 'react';
import DetailsComp from './DetailsComp';

export default {
  title: 'MOLECULES/DetailsComp',
  component: DetailsComp,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'DetailsComp';
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

const Template = (args) => <DetailsComp {...args} />;

export const Default = Template.bind({});
Default.args = {};
