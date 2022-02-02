import TextInput, { IMolTextInputProps } from './TextInput';
import { Meta, Story } from '@storybook/react';
import { type } from 'os';

export default {
  title: 'Molecules/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<IMolTextInputProps> = (args) => (
  <>
    <TextInput {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  labelText: 'test',
  message: '너 틀림 암튼 그럼',
  type: 'email',
};
