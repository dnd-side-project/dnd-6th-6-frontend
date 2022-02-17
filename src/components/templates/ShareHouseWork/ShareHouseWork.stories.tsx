import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import ShareHouseWork, { ITempShareHouseWorkProps } from './ShareHouseWork';

export default {
  title: 'Templates/ShareHouseWork',
  component: ShareHouseWork,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempShareHouseWorkProps> = (args) => (
  <>
    <StoriesLayout>
      <ShareHouseWork {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
