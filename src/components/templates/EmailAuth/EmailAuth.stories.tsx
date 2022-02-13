import { Meta, Story } from '@storybook/react';
import EmailAuth from './EmailAuth';

export default {
  title: 'Templates/EmailAuth',
  component: EmailAuth,
  parameters: {},
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
