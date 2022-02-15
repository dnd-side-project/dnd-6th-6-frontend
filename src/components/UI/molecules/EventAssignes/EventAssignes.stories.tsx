import { Meta, Story } from '@storybook/react';
import EventAssignes, { IMoleEventAssignesProps } from './EventAssignes';

export default {
  title: 'Molecules/EventAssignes',
  component: EventAssignes,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleEventAssignesProps> = (args) => (
  <>
    <div style={{ width: '375px' }}>
      <EventAssignes {...args}></EventAssignes>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
