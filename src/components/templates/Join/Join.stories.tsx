import { Meta, Story } from '@storybook/react';
import Join, { ITempJoinProps } from './Join';

export default {
  Join: 'Templates/Join',
  component: Join,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempJoinProps> = (args) => (
  <>
    <Join {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: '회원가입',
  to: '/join',
};
