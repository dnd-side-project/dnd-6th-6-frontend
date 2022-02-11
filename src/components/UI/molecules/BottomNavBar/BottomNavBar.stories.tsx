import { Meta, Story } from '@storybook/react';
import BottomNavBar from './BottomNavBar';

export default {
  title: 'Molecules/BottomNavBar',
  component: BottomNavBar,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <BottomNavBar {...args}></BottomNavBar>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
