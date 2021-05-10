import React from 'react';
import BlogPrev from './BlogPrev';

export default {
  title: 'MOLECULES/BlogPrev',
  component: BlogPrev,
  decorators: [
    (Story) => {
      Story.displayName = 'BlogPrev';
      return (
        <div
          style={{
            backgroundColor: '#f7f7f7',
            paddingTop: '30px',
            width: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              width: '1000px',
              margin: '0 auto',
              padding: '0 5%',
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

const Template = (args) => <BlogPrev {...args} />;
export const Default = Template.bind({});
Default.args = {};
