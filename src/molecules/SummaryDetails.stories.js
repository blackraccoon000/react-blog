import React from 'react';
import SummaryDetails from './SummaryDetails';

export default {
  title: 'MOLECULES/SummaryDetails',
  component: SummaryDetails,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'SummaryDetails';
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <SummaryDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  summaryLabel: 'Whats PlayWell?',
  someLink: [
    {
      link: '#',
      linkLabel: 'Link α',
    },
    {
      link: '#',
      linkLabel: 'Link β',
    },
    {
      link: '#',
      linkLabel: 'Link γ',
    },
  ],
};
