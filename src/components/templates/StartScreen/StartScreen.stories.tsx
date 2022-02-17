import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import StartScreen, { ITempStartScreenProps } from './StartScreen';

export default {
  title: 'Templates/StartScreen',
  component: StartScreen,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempStartScreenProps> = (args) => (
  <>
    <StoriesLayout>
      <StartScreen {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
