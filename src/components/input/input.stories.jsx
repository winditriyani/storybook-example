import React from 'react';

import Input from './input';

export default {
  component: Input,
  title: 'Inputs/Input',
  argTypes: { onChange: { value: 'clicked' }, size:{ control:{type: 'radio',options: ['lg', 'sm']} }},
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder:"Default input",
    disabled: false,
    size: 'lg'
  };



