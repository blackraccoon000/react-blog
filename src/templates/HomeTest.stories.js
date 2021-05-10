import React from 'react';
import HomeTest from './HomeTest';

export default {
  title: 'TEMPLATES/HomeTest',
  component: HomeTest,
};

const Template = (args) => <HomeTest {...args} />;

export const Default = Template.bind({});
Default.args = {};
