import { Meta, Story } from '@storybook/react';
import Alarm, { IAtomAlarmProps } from './Alarm';

export default {
  title: 'Atoms/Alarm',
  component: Alarm,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomAlarmProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Alarm {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  active: true,
};
