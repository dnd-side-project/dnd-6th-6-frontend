import FeedbackGiveForm, { IOrgFeedbackGiveFormProps } from './FeedbackGiveForm';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'organisms/FeedbackGiveForm',
  component: FeedbackGiveForm,
} as Meta;

const Template: Story<IOrgFeedbackGiveFormProps> = (args) => (
  <>
    <FeedbackGiveForm {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
