import { Meta, Story } from '@storybook/react';
import NoticeCard, { IMoleNoticeCardProps } from './NoticeCard';

export default {
  title: 'Molecules/NoticeCard',
  component: NoticeCard,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleNoticeCardProps> = (args) => (
  <>
    <NoticeCard {...args}></NoticeCard>
    <NoticeCard {...args} fix={false}></NoticeCard>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  first_name: '유리',
  createdAt: new Date(),
  content: '금요일에 모여서 다 같이 대청소해요!',
  fix: true,
};
