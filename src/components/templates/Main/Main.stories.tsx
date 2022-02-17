import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import Main from './Main';

export default {
  title: 'Templates/Main',
  component: Main,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <StoriesLayout>
      <Main {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
