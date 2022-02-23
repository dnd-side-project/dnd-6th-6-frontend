import { Meta, Story } from '@storybook/react';
import { repeatChore1, repeatChore2 } from '../../../../dummyData/dummyRepeatChore';
import RepeatEventCards, { IOrgRepeatEventCardsProps } from './RepeatEventCards';

export default {
  title: 'Organisms/RepeatEventCards',
  component: RepeatEventCards,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IOrgRepeatEventCardsProps> = (args) => (
  <>
    <div style={{ padding: '20px' }}>
      <RepeatEventCards {...args}></RepeatEventCards>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  repeatChores: [repeatChore1, repeatChore2],
};
