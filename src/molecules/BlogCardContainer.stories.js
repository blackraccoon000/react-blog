import React from 'react';
import BlogCardContainer from './BlogCardContainer';

export default {
  title: 'MOLECULES/BlogCardContainer',
  component: BlogCardContainer,
  decorators: [
    (Story) => {
      Story.displayName = 'BlogCardContainer';
      return (
        <div
          style={{
            backgroundColor: '#f7f7f7',
            padding: '30px',
            width: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              width: '320px',
              margin: '0 auto',
              padding: '10px 5%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Story />
          </div>
        </div>
      );
    },
  ],
};

const Template = (args) => <BlogCardContainer {...args} />;
export const Default = Template.bind({});
Default.args = {};
