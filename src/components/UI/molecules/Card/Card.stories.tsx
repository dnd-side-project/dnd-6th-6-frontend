import { Meta, Story } from '@storybook/react';
import Card, { IMoleCardProps } from './Card';

export default {
  Card: 'Molecules/Card',
  component: Card,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleCardProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card {...args}></Card>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  content: '수정님이 분리수거를 할 예정이에요.',
  avatarName: '수정',
};
