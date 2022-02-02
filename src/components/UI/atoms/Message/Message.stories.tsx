import { Meta, Story } from '@storybook/react';
import Message, { IAtomMessageProps } from './Message';

export default {
  title: 'Atoms/Message',
  component: Message,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomMessageProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <span>error</span>
      <Message {...args} className="error"></Message>
      <span>success</span>
      <Message {...args} className="success"></Message>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
