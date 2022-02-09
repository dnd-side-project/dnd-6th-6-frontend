import { Meta, Story } from '@storybook/react';
import TodayToDoHouse, { IOrgTodayToDoHouseProps } from './TodayToDoHouse';

export default {
  title: 'origanisms/TodayToDoHouse',
  component: TodayToDoHouse,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IOrgTodayToDoHouseProps> = (args) => (
  <>
    <div
      style={{
        width: '375px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F8F9FD',
      }}
    >
      <TodayToDoHouse {...args}></TodayToDoHouse>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
