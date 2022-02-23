import OneTimeEventCards, { IOrgOneTimeEventCardsProps } from './OneTimeEventCards';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'organisms/OneTimeEventCards',
  component: OneTimeEventCards,
} as Meta;

const Template: Story<IOrgOneTimeEventCardsProps> = (args) => (
  <>
    <OneTimeEventCards {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
