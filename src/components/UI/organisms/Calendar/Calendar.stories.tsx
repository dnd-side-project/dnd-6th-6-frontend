import Calendar from './Calendar';
import { Meta, Story } from '@storybook/react';
import { type } from 'os';

export default {
  title: 'organisms/Calendar',
  component: Calendar,
} as Meta;

const Template: Story = (args) => (
  <>
    <Calendar {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
