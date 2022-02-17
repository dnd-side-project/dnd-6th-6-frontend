import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import NoticeWrite, { ITempNoticeWriteProps } from './NoticeWrite';

export default {
  title: 'Templates/NoticeWrite',
  component: NoticeWrite,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempNoticeWriteProps> = (args) => (
  <>
    <StoriesLayout>
      <NoticeWrite {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
