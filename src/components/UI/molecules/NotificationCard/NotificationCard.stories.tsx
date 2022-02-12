import { Meta, Story } from '@storybook/react';
import NotificationCard, { IMoleNotificationCardProps } from './NotificationCard';

export default {
  title: 'Molecules/NotificationCard',
  component: NotificationCard,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleNotificationCardProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <NotificationCard {...args}></NotificationCard>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
