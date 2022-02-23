import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import ShareHouseWorkBlank, { ITempShareHouseWorkBlankProps } from './ShareHouseWorkBlank';

export default {
  title: 'Templates/ShareHouseWorkBlank',
  component: ShareHouseWorkBlank,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempShareHouseWorkBlankProps> = (args) => (
  <>
    <StoriesLayout>
      <ShareHouseWorkBlank {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
