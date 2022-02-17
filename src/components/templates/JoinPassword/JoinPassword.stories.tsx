import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import JoinPassword from './JoinPassword';

export default {
  title: 'Templates/JoinPassword',
  component: JoinPassword,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout>
      <JoinPassword {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
