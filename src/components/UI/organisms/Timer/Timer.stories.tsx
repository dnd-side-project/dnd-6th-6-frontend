import TimePicker from './TimePicker';
import { Meta, Story } from '@storybook/react';
import { type } from 'os';
import { ITimerProps } from './TimePicker';

export default {
  title: 'organisms/TimePicker',
  component: TimePicker,
} as Meta;

const Template: Story<ITimerProps> = (args) => (
  <>
    <TimePicker />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
