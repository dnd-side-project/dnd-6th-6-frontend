import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import RequestReceive, { ITempRequestReceiveProps } from './RequestReceive';

export default {
  title: 'Templates/RequestReceive',
  component: RequestReceive,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempRequestReceiveProps> = (args) => (
  <>
    <StoriesLayout>
      <RequestReceive {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
