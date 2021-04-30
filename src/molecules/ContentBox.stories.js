import React from 'react';
import ContentBox from './ContentBox';

export default {
  title: 'MOLECULES/ContentBox',
  component: ContentBox,
  decorators: [
    (Story) => {
      Story.displayName = 'ContentBox';
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

const Template = (args) => <ContentBox {...args} />;
export const Default = Template.bind({});
Default.args = {};
