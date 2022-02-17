import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import Request, { ITempRequestProps } from './Request';

export default {
  title: 'Templates/Request',
  component: Request,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempRequestProps> = (args) => (
  <>
    <StoriesLayout>
      <Request {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
