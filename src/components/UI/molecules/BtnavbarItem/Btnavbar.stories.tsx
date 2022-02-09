import { Meta, Story } from '@storybook/react';
import Btnavbaritem from './Btnavbaritem';

export default {
  title: 'Molecules/Btnavbaritem',
  component: Btnavbaritem,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <Btnavbaritem {...args}></Btnavbaritem>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
