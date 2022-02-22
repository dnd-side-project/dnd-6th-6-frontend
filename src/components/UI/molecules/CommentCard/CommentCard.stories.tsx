import { Meta, Story } from '@storybook/react';
import CommentCard, { IMoleCommentCardProps } from './CommentCard';

export default {
  title: 'Molecules/CommentCard',
  component: CommentCard,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleCommentCardProps> = (args) => (
  <>
    <CommentCard {...args}></CommentCard>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  first_name: '김세훈',
  avatar: '',
  content: '근데 우리 장봐야할 것이 있었나? 냉장고 살펴보니까 식재료는 다 남아있던듯?.. 모르겠네',
  writed_at: '5분 전',
};
