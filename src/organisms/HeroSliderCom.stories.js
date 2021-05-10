import React from 'react';
import HeroSliderCom from './HeroSliderCom';

export default {
  title: 'ORGANISMS/HeroSliderCom',
  component: HeroSliderCom,
};

const Template = (args) => <HeroSliderCom {...args} />;

export const Default = Template.bind({});
Default.args = {};
