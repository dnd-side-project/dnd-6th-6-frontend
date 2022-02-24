import { Meta, Story } from '@storybook/react';
import { repeatComment1, repeatComment2, repeatComment3, repeatComment4 } from '../../../dummyData/dummyComment';
import { repeatChore1 } from '../../../dummyData/dummyRepeatChore';
import { user1 } from '../../../dummyData/dummyUser';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import EventDetail, { ITempEventDetailProps } from './EventDetail';

export default {
  title: 'Templates/EventDetail',
  component: EventDetail,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempEventDetailProps> = (args) => (
  <>
    <StoriesLayout>
      <EventDetail {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  chore: repeatChore1,
  comments: [repeatComment1, repeatComment2, repeatComment3, repeatComment4],
  me: user1,
};
