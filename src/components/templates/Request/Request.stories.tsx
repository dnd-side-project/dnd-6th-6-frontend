import { Meta, Story } from '@storybook/react';
import Request, { ITempRequestProps } from './Request';

export default {
  title: 'Templates/Request',
  component: Request,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempRequestProps> = (args) => (
  <>
    <Request {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
