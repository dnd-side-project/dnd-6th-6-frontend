import { Meta, Story } from '@storybook/react';
import { repeatChore1 } from '../../../../dummyData/dummyRepeatChore';
import RepeatEventCard, { IMoleRepeatEventCardProps } from './RepeatEventCard';

export default {
  title: 'Molecules/RepeatEventCard',
  component: RepeatEventCard,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleRepeatEventCardProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <RepeatEventCard {...args}></RepeatEventCard>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  repeatChore: repeatChore1,
};
