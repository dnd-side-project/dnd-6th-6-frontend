import { Meta, Story } from '@storybook/react';
import HouseCard, { IMoleHouseCardProps } from './HouseCard';

export default {
  Card: 'Molecules/HouseCard',
  component: HouseCard,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleHouseCardProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F8F9FD' }}>
      <HouseCard {...args}></HouseCard>
      <hr />
      <HouseCard {...args} completed_at={null}></HouseCard>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  completed_at: '2월 5일 토요일 13:30',
  event_title: '분리수거',
  first_name: '지현',
};
