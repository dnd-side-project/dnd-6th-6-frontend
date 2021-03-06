import { Meta, Story } from '@storybook/react';
import Button, { IAtomButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomButtonProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button {...args}>이메일로 회원가입</Button>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  color: 'black',
};
