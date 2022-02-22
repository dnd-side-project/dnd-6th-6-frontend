import { Meta, Story } from '@storybook/react';
import CommentForm, { IMoleCommentFormProps } from './CommentForm';

export default {
  title: 'Molecules/CommentForm',
  component: CommentForm,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleCommentFormProps> = (args) => (
  <>
    <CommentForm {...args}></CommentForm>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  avatar: '',
};
