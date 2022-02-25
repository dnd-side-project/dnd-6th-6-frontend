import { Meta, Story } from '@storybook/react';
import { chore2, chore3 } from '../../../dummyData/dummyChore';
import { user1 } from '../../../dummyData/dummyUser';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import Main, { ITempMainProps } from './Main';

export default {
  title: 'Templates/Main',
  component: Main,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempMainProps> = (args) => (
  <>
    <StoriesLayout>
      <Main {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  me: user1,
  todayChoresMe: [chore2, chore3],
  todayChoresOther: [chore2, chore3],
};
