import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import HouseNone from './HouseNone';

export default {
  title: 'Templates/HouseNone',
  component: HouseNone,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <StoriesLayout>
      <HouseNone {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: '',
};
