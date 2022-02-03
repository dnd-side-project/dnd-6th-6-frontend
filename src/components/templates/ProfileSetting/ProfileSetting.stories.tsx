import { Meta, Story } from '@storybook/react';
import ProfileSetting, { ITempProfileSettingProps } from './ProfileSetting';

export default {
  Join: 'Templates/ProfileSetting',
  component: ProfileSetting,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempProfileSettingProps> = (args) => (
  <>
    <ProfileSetting {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
