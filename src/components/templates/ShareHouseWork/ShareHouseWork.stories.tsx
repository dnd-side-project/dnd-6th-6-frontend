import { Meta, Story } from '@storybook/react';
import { chore1, chore2, chore3 } from '../../../dummyData/dummyChore';
import { repeatChore1, repeatChore2 } from '../../../dummyData/dummyRepeatChore';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import ShareHouseWork, { ITempShareHouseWorkProps } from './ShareHouseWork';

export default {
  title: 'Templates/ShareHouseWork',
  component: ShareHouseWork,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempShareHouseWorkProps> = (args) => (
  <>
    <StoriesLayout>
      <ShareHouseWork {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  repeatChores: [repeatChore1, repeatChore2],
  oneTimeChores: [chore1, chore2, chore3],
};
