import React from 'react';
import AccordionComp from './AccordionComp';
import { Reset } from 'styled-reset';

export default {
  title: 'MOLECULES/AccordionComp',
  component: AccordionComp,
  argTypes: {},
  decorators: [
    (Story) => {
      Story.displayName = 'AccordionComp';
      return (
        <div
          style={{
            width: '500px',
            height: '500px',
            margin: '0 auto',
            padding: '50px 50px',
          }}
        >
          <Reset />
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <AccordionComp {...args} />;

export const Default = Template.bind({});
Default.args = {};
