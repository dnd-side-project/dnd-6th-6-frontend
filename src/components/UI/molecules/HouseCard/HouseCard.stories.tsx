import { Meta, Story } from '@storybook/react';
import HouseCard, { IMoleHouseCardProps } from './HouseCard';

export default {
  title: 'Molecules/HouseCard',
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
  completed_at: new Date(),
  event_title: '분리수거',
  assignees: [
    {
      id: 1,
      first_name: '지현',
      username: '지현',
      user_profile: {
        id: 1,
        avatar: '',
        house: {
          id: 1,
          name: '서울하우스',
        },
      },
    },
    {
      id: 2,
      first_name: '재현',
      username: '재현',
      user_profile: {
        id: 1,
        avatar: '',
        house: {
          id: 1,
          name: '서울하우스',
        },
      },
    },
    {
      id: 3,
      first_name: '재훈',
      username: '재훈',
      user_profile: {
        id: 1,
        avatar: '',
        house: {
          id: 1,
          name: '서울하우스',
        },
      },
    },
  ],
};
