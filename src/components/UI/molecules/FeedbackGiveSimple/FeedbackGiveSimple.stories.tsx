import { Meta, Story } from '@storybook/react';
import FeedbackGiveSimple, { IMoleFeedbackGiveSimpleProps } from './FeedbackGiveSimple';

export default {
  title: 'Molecules/FeedbackGiveSimple',
  component: FeedbackGiveSimple,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleFeedbackGiveSimpleProps> = (args) => (
  <>
    <FeedbackGiveSimple {...args}></FeedbackGiveSimple>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  checkSimpleMessages: ['시간 약속을 잘 지켜요', '정해진 일을 잘 수행했어요'],
};
