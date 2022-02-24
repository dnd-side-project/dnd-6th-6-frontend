import EventDetailHeader, { IOrgEventDetailHeaderProps } from './EventDetailHeader';
import { Meta, Story } from '@storybook/react';
import { chore1 } from '../../../../dummyData/dummyChore';

export default {
  title: 'organisms/EventDetailHeader',
  component: EventDetailHeader,
} as Meta;

const Template: Story<IOrgEventDetailHeaderProps> = (args) => (
  <>
    <EventDetailHeader {...args} />
    <hr />
    <EventDetailHeader {...args} isRepeatChore={false} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  isRepeatChore: true,
  chore: chore1,
};
