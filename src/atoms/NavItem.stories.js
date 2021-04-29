import React from 'react';
import NavItem from './NavItem';

export default {
  title: 'ATOMS/NavItem',
  component: NavItem,
  argTypes: {},
  decorators: [
    (Story) => {
      Story.displayName = 'NavItem';
      return (
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#000',
            display: 'flex',
            height: '100px',
            margin: '20px',
            width: 'auto',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
