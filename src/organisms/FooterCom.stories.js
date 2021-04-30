import React from 'react';
import FooterCom from './FooterCom';

export default {
  title: 'ORGANISMS/FooterCom',
  component: FooterCom,
  argTypes: {},
};

const Template = (args) => <FooterCom {...args} />;

export const Default = Template.bind({});
Default.args = {};
