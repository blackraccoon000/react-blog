import React from 'react';
import FooterItems from './FooterItems';

export default {
  title: 'MOLECULES/FooterItems',
  component: FooterItems,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'FooterItems';
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

const Template = (args) => <FooterItems {...args} />;

export const Default = Template.bind({});
Default.args = {};
