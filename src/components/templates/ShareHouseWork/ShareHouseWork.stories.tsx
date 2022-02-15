import { Meta, Story } from '@storybook/react';
import ShareHouseWork, { ITempShareHouseWorkProps } from './ShareHouseWork';

export default {
  title: 'Templates/ShareHouseWork',
  component: ShareHouseWork,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempShareHouseWorkProps> = (args) => (
  <>
    <ShareHouseWork {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
