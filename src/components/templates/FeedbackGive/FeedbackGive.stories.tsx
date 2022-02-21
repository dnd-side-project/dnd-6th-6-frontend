import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import FeedbackGive, { ITempFeedbackGiveProps } from './FeedbackGive';

export default {
  title: 'Templates/FeedbackGive',
  component: FeedbackGive,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempFeedbackGiveProps> = (args) => (
  <>
    <StoriesLayout>
      <FeedbackGive {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
