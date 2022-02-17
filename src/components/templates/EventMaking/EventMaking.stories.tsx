import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import EventMaking, { ITempEventMakingProps } from './EventMaking';

export default {
  title: 'Templates/EventMaking',
  component: EventMaking,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempEventMakingProps> = (args) => (
  <>
    <StoriesLayout>
      <EventMaking {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
