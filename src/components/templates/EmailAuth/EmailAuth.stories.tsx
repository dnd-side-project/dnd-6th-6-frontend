import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import EmailAuth from './EmailAuth';

export default {
  title: 'Templates/EmailAuth',
  component: EmailAuth,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <EmailAuth {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
