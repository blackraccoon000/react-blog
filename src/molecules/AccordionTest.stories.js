import React from 'react';
import AccordionTest from './AccordionTest';

export default {
  title: 'MOLECULES/AccordionTest',
  component: AccordionTest,
  argTypes: {},
  decorators: [
    (Story) => {
      Story.displayName = 'AccordionTest';
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

const Template = (args) => <AccordionTest {...args} />;

export const Default = Template.bind({});
Default.args = {
  accordionArray: [
    {
      mainMenuTitle: {
        link: '#',
        label: 'メニュー1',
      },
      subMenuItem: [
        {
          link: '#',
          label: 'サブメニュー1',
        },
        {
          link: '#',
          label: 'サブメニュー2',
        },
        {
          link: '#',
          label: 'サブメニュー3',
        },
      ],
    },
  ],
};

export const ThirdArray = Template.bind({});
ThirdArray.args = {
  accordionArray: [
    {
      mainMenuTitle: {
        link: '#',
        label: 'メニュー1',
      },
      subMenuItem: [
        {
          link: '#',
          label: 'サブメニュー1',
        },
        {
          link: '#',
          label: 'サブメニュー2',
        },
        {
          link: '#',
          label: 'サブメニュー3',
        },
      ],
    },
    {
      mainMenuTitle: {
        link: '#',
        label: 'メニュー2',
      },
      subMenuItem: [
        {
          link: '#',
          label: 'サブメニュー1',
        },
        {
          link: '#',
          label: 'サブメニュー2',
        },
        {
          link: '#',
          label: 'サブメニュー3',
        },
      ],
    },
    {
      mainMenuTitle: {
        link: '#',
        label: 'メニュー3',
      },
      subMenuItem: [
        {
          link: '#',
          label: 'サブメニュー1',
        },
        {
          link: '#',
          label: 'サブメニュー2',
        },
        {
          link: '#',
          label: 'サブメニュー3',
        },
      ],
    },
  ],
};
