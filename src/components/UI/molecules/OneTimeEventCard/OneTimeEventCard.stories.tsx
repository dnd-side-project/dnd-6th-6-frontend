import { Meta, Story } from '@storybook/react';
import { chore1 } from '../../../../dummyData/dummyChore';
import OneTimeEventCard, { IMoleOneTimeEventCardProps } from './OneTimeEventCard';

export default {
  title: 'Molecules/OneTimeEventCard',
  component: OneTimeEventCard,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleOneTimeEventCardProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <OneTimeEventCard {...args}></OneTimeEventCard>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  chore: chore1,
};
