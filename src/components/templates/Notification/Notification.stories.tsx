import { Meta, Story } from '@storybook/react';
import { notification, notification2 } from '../../../dummyData/dummyNotification';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import Notification, { ITempNotificationProps } from './Notification';

export default {
  title: 'Templates/Notification',
  component: Notification,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempNotificationProps> = (args) => (
  <>
    <StoriesLayout>
      <Notification {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  notifications: [notification, notification2],
};
