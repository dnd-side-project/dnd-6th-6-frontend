import { Meta, Story } from '@storybook/react';
import MyToDoCard, { IMoleMyToDoCardProps } from './MyToDoCard';

export default {
  MyToDoCard: 'Molecules/MyToDoCard',
  component: MyToDoCard,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleMyToDoCardProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F8F9FD' }}>
      <MyToDoCard {...args}></MyToDoCard>
      <hr />
      <MyToDoCard {...args} title="다용도실 청소하기" completed_at="date" days="금요일" category="청소"></MyToDoCard>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: '세탁하기 및 널기',
  completed_at: null,
  days: '금요일',
  category: '세탁',
};
