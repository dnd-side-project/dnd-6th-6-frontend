import { Meta, Story } from '@storybook/react';
import Btnavbar from './Btnavbar';

export default {
  Header: 'Organisms/Btnavbaritem',
  component: Btnavbar,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <Btnavbar {...args}></Btnavbar>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
