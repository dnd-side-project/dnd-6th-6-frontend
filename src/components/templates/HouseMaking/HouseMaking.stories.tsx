import { Meta, Story } from '@storybook/react';
import HouseMaking from './HouseMaking';

export default {
  title: 'Templates/HouseMaking',
  component: HouseMaking,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <HouseMaking {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: '하우스만들기',
};
