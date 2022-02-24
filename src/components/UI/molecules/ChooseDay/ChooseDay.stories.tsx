import { Meta, Story } from '@storybook/react';
import ChooseDay, { IMoleChooseDayProps } from './ChooseDay';

export default {
  title: 'Molecules/ChooseDay',
  component: ChooseDay,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleChooseDayProps> = (args) => (
  <>
    <ChooseDay {...args}></ChooseDay>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  chooseDays: [
    { id: 1, name: '월' },
    { id: 2, name: '화' },
  ],
};
