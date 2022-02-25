import MonthSelect, { IMoleMonthSelectProps } from './MonthSelect';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Molecules/MonthSelect',
  component: MonthSelect,
} as Meta;

const Template: Story<IMoleMonthSelectProps> = (args) => (
  <>
    <MonthSelect {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
