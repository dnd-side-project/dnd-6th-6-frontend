import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import ProfileSetting, { ITempProfileSettingProps } from './ProfileSetting';

export default {
  title: 'Templates/ProfileSetting',
  component: ProfileSetting,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempProfileSettingProps> = (args) => (
  <>
    <StoriesLayout>
      <ProfileSetting {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
