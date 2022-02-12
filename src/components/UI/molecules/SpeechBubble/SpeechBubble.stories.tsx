import { Meta, Story } from '@storybook/react';
import SpeechBubble, { IMoleSpeechBubbleProps } from './SpeechBubble';

export default {
  title: 'Molecules/SpeechBubble',
  component: SpeechBubble,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleSpeechBubbleProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SpeechBubble {...args}></SpeechBubble>
      <br />
      <SpeechBubble {...args} request={false}></SpeechBubble>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  request: true,
  first_name: '유진',
  response_message: '지수님, 오늘 회식이 있는데 혹시 지수님에게 빨래를 부탁드려도 될까요?',
};
