import { Meta, Story } from '@storybook/react';
import Avatar, { IAtomAvatarProps } from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomAvatarProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar {...args}>test</Avatar>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
