import { Meta, Story } from '@storybook/react';
import { chore1 } from '../../../dummyData/dummyChore';
import { user1, user2, user3 } from '../../../dummyData/dummyUser';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import Request, { ITempRequestProps } from './Request';

export default {
  title: 'Templates/Request',
  component: Request,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempRequestProps> = (args) => (
  <>
    <StoriesLayout>
      <Request {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  chore: chore1,
  members: [user1, user2, user3],
};
