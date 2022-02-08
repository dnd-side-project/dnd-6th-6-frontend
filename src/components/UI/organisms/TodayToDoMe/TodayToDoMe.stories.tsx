import { Meta, Story } from '@storybook/react';
import TodayToDoMe, { IOrgTodayToDoMeProps } from './TodayToDoMe';

export default {
  Header: 'Organisms/TodayToDoMeitem',
  component: TodayToDoMe,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IOrgTodayToDoMeProps> = (args) => (
  <>
    <div style={{ width: '375px' }}>
      <TodayToDoMe {...args}></TodayToDoMe>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
