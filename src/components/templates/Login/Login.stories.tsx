import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import Login from './Login';

export default {
  title: 'Templates/Login',
  component: Login,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <StoriesLayout>
      <Login {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: '로그인',
  to: '/join',
};
