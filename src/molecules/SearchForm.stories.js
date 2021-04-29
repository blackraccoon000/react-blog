import React from 'react';
import SearchForm from './SearchForm';

export default {
  title: 'MOLECULES/SearchForm',
  component: SearchForm,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'SearchForm';
      return (
        <div
          style={{
            backgroundColor: '#000',
            height: 500,
            top: 0,
            left: 0,
            width: 500,
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  flag: true,
};
