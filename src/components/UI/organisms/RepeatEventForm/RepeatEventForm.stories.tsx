import { Meta, Story } from '@storybook/react';
import RepeatEventForm, { IOrgRepeatEventFormProps } from './RepeatEventForm';

export default {
  title: 'Organisms/RepeatEventForm',
  component: RepeatEventForm,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IOrgRepeatEventFormProps> = (args) => (
  <>
    <div style={{ padding: '20px' }}>
      <RepeatEventForm {...args}></RepeatEventForm>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
