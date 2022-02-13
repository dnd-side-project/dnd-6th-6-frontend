import { Meta, Story } from '@storybook/react';
import JoinPassword from './JoinPassword';

export default {
  title: 'Templates/JoinPassword',
  component: JoinPassword,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <JoinPassword {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
