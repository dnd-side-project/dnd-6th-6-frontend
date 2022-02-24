import { Meta, Story } from '@storybook/react';
import { chore1 } from '../../../../dummyData/dummyChore';
import CompletionModal, { IMoleCompletionModalProps } from './CompletionModal';

export default {
  title: 'Molecules/CompletionModal',
  component: CompletionModal,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleCompletionModalProps> = (args) => (
  <>
    <CompletionModal {...args}></CompletionModal>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  chore: chore1,
};
