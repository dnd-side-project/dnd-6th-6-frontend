import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import HouseMaking from './HouseMaking';

export default {
  title: 'Templates/HouseMaking',
  component: HouseMaking,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <StoriesLayout>
      <HouseMaking {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: '하우스만들기',
};
