import { Meta, Story } from '@storybook/react';
import { feedback1 } from '../../../dummyData/dummyFeedback';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import FeedbackAccept, { ITempFeedbackAcceptProps } from './FeedbackAccept';

export default {
  title: 'Templates/FeedbackAccept',
  component: FeedbackAccept,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempFeedbackAcceptProps> = (args) => (
  <>
    <StoriesLayout>
      <FeedbackAccept {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  feedback: feedback1,
};
