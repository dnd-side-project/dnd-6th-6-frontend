import { Meta, Story } from '@storybook/react';
import OneTimeEventForm, { IOrgOneTimeEventFormProps } from './OneTimeEventForm';

export default {
  title: 'Organisms/OneTimeEventForm',
  component: OneTimeEventForm,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IOrgOneTimeEventFormProps> = (args) => (
  <>
    <div style={{ width: '375px' }}>
      <OneTimeEventForm {...args}></OneTimeEventForm>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
