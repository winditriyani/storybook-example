import React from 'react';

import InputGroup from './input-group';
import Input from '../input/input'

export default {
  title: 'Inputs/Input-Group',
  component: InputGroup,
  parameters: {
    componentSubtitle: 'Displays an image that represents a user or organization',
    },
  argTypes: {},
  subcomponents: { Input },

};

const Template = args => <InputGroup {...args} />;

export const InputGroupRight = Template.bind({});
InputGroupRight.args = {
    addonRight:'@',
    right:true,
  };


export const InputGroupLeft = Template.bind({});
InputGroupLeft.args = {
    addonLeft:'@Left',
    left:true,
  };


  InputGroupLeft.parameters = {
    addonLeft: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
  }
