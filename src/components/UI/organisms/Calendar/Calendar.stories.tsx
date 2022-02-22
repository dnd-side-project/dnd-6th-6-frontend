import Calendar, { IOrgCalendarProps } from './Calendar';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'organisms/Calendar',
  component: Calendar,
} as Meta;

const Template: Story<IOrgCalendarProps> = (args) => (
  <>
    <Calendar {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  // startDate: Date,
  // setStartDate: Date
};
