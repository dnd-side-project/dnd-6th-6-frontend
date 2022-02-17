import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import NoticeDetail, { ITempNoticeDetailProps } from './NoticeDetail';

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
Default.args = {};
