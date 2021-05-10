import React from 'react';
import BlogHighlight from './BlogHighlight';

export default {
  title: 'MOLECULES/BlogHighlight',
  component: BlogHighlight,
  decorators: [
    (Story) => {
      Story.displayName = 'BlogHighlight';
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

const Template = (args) => <BlogHighlight {...args} />;
export const Default = Template.bind({});
Default.args = {};
