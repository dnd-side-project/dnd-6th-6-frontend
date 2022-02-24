import FeedbackCard, { IOrgFeedbackCardProps } from './FeedbackCard';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'organisms/FeedbackCard',
  component: FeedbackCard,
} as Meta;

const Template: Story<IOrgFeedbackCardProps> = (args) => (
  <>
    <FeedbackCard {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  from_emojiIndex: 1,
  from_firstName: '유진',
  from_avatar: '',
  from_content: '오늘 하루도 고마워!! 깔끔하게 잘 했던데? 다음에 내 차례가 되면 나도 이만큼 해야할듯ㅠㅠ',
  chore_completed_at: new Date(),
  information_categoryId: 1,
  information_name: '분리수거 하기',
};
