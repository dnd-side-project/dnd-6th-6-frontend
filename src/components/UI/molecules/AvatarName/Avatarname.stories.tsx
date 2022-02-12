import { Meta, Story } from '@storybook/react';
import AvatarName, { IMoleAvatarName } from './AvatarName';

export default {
  title: 'Molecules/AvatarName',
  component: AvatarName,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleAvatarName> = (args) => (
  <>
    <AvatarName {...args}></AvatarName>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  first_name: '유리',
};
