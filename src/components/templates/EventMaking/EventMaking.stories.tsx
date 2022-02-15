import { Meta, Story } from '@storybook/react';
import EventMaking, { ITempEventMakingProps } from './EventMaking';

export default {
  title: 'Templates/EventMaking',
  component: EventMaking,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempEventMakingProps> = (args) => (
  <>
    <EventMaking {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
