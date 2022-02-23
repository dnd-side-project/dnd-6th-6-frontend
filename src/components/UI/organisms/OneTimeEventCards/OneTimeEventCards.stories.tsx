import OneTimeEventCards, { IOrgOneTimeEventCardsProps } from './OneTimeEventCards';
import { Meta, Story } from '@storybook/react';
import { chore1, chore2, chore3 } from '../../../../dummyData/dummyChore';

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
Default.args = {
  oneTimeChores: [chore1, chore2, chore3],
};
