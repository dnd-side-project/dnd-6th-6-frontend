import { Meta, Story } from '@storybook/react';
import ChooseEmojiModal, { IMoleChooseEmojiModalProps } from './ChooseEmojiModal';

export default {
  title: 'Molecules/ChooseEmojiModal',
  component: ChooseEmojiModal,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleChooseEmojiModalProps> = (args) => (
  <>
    <ChooseEmojiModal {...args}></ChooseEmojiModal>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
