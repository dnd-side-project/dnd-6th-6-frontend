import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import NoticeDetail, { ITempNoticeDetailProps } from './NoticeDetail';
import { notice1, notice2, notice3, notice4, notice5, notice6 } from '../../../dummyData/dummyNotice';

export default {
  title: 'Templates/NoticeDetail',
  component: NoticeDetail,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempNoticeDetailProps> = (args) => (
  <>
    <StoriesLayout>
      <NoticeDetail {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  notices: [notice1, notice2, notice3, notice4, notice5, notice6],
};
