import { Meta, Story } from '@storybook/react';
import RequestReceive, { ITempRequestReceiveProps } from './RequestReceive';

export default {
  title: 'Templates/RequestReceive',
  component: RequestReceive,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempRequestReceiveProps> = (args) => (
  <>
    <RequestReceive {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
