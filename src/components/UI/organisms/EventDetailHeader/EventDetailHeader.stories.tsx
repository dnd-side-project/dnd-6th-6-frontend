import EventDetailHeader, { IOrgEventDetailHeaderProps } from './EventDetailHeader';
import { Meta, Story } from '@storybook/react';

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
  name: '같이 장보러 갈사람!',
  planned_at: new Date(),
  completed_at: new Date(),
  assignees: [
    {
      id: 1,
      first_name: '김지수',
      username: '',
      user_profile: {
        id: 1,
        avatar: '',
      },
    },
    {
      id: 2,
      first_name: '박민기',
      username: '',
      user_profile: {
        id: 2,
        avatar: '',
      },
    },
  ],
};
