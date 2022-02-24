import { Meta, Story } from '@storybook/react';
import { chore3 } from '../../../dummyData/dummyChore';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import TodayToDoMeDetail, { ITempTodayToDoMeDetailProps } from './TodayToDoMeDetail';

export default {
  title: 'Templates/TodayToDoMeDetail',
  component: TodayToDoMeDetail,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempTodayToDoMeDetailProps> = (args) => (
  <>
    <StoriesLayout>
      <TodayToDoMeDetail {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  chore: chore3,
};
