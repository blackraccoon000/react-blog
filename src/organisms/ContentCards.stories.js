import React from 'react';
import ContentCards from './ContentCards';

export default {
  title: 'ORGANISMS/ContentCards',
  component: ContentCards,
  argTypes: {},
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
              width: '1380px',
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

const Template = (args) => <ContentCards {...args} />;

export const Default = Template.bind({});
Default.args = {};
