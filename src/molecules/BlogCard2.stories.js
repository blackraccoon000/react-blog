import React from 'react';
import BlogCard2 from './BlogCard2';

export default {
  title: 'MOLECULES/BlogCard2',
  component: BlogCard2,
  decorators: [
    (Story) => {
      Story.displayName = 'BlogCard2';
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

const Template = (args) => <BlogCard2 {...args} />;
export const Default = Template.bind({});
Default.args = {};
