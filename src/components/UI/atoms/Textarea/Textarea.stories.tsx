import { Meta, Story } from '@storybook/react';
import Textarea, { IAtomTextareaProps } from './Textarea';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomTextareaProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Textarea {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  placeholder: '아무거나 적어보렴',
};
