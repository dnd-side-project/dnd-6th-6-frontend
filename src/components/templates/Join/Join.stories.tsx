import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import Join, { ITempJoinProps } from './Join';

export default {
  title: 'Templates/Join',
  component: Join,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempJoinProps> = (args) => (
  <>
    <StoriesLayout>
      <Join {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
