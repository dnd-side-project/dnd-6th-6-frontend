import { Meta, Story } from '@storybook/react';
import Label, { IAtomLabelProps } from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomLabelProps> = (args) => (
  <>
    <div>
      <Label {...args}>야오오오오오오옹</Label>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  fontSize: '40px;',
};
