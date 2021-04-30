import React from 'react';
import FooterIcons from './FooterIcons';

export default {
  title: 'MOLECULES/FooterIcons',
  component: FooterIcons,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'FooterIcons';
      return (
        <div
          style={{
            backgroundColor: '#e6cccc8a',
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

const Template = (args) => <FooterIcons {...args} />;

export const Default = Template.bind({});
Default.args = {};
