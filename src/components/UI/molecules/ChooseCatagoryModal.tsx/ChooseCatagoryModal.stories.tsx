import { Meta, Story } from '@storybook/react';
import ChooseCatagoryModal, { IMoleChooseCatagoryModalProps } from './ChooseCatagoryModal';

export default {
  title: 'Molecules/ChooseCatagoryModal',
  component: ChooseCatagoryModal,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleChooseCatagoryModalProps> = (args) => (
  <>
    <ChooseCatagoryModal {...args}></ChooseCatagoryModal>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
