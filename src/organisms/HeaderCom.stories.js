import React from 'react';
import HeaderCom from './HeaderCom';

export default {
  title: 'ORGANISMS/HeaderCom',
  component: HeaderCom,
  argTypes: {},
};

const Template = (args) => <HeaderCom {...args} />;

export const Default = Template.bind({});
Default.args = {};
