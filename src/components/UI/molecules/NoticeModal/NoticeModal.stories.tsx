import { Meta, Story } from '@storybook/react';
import NoticeModal, { IMoleNoticeModalProps } from './NoticeModal';

export default {
  title: 'Molecules/NoticeModal',
  component: NoticeModal,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleNoticeModalProps> = (args) => (
  <>
    <NoticeModal {...args}></NoticeModal>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
