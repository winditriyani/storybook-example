import React from 'react';
import Task from './task';
import { action } from '@storybook/addon-actions';

export default {
  component: Task,
  title: 'Task-List/Task',
  argTypes : {
    task: {
      name: 'task',
      defaultValue: 'Hello',
      description: 'demo description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello' },
      },
    },
    onClick: { action: 'clicked' }
  }
};

const Template = args => <Task {...args} onPinTask={action(args.onPinTask)}/>;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};