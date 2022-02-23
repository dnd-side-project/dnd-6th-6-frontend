import { Meta, Story } from '@storybook/react';
import Time, { IAtomTimeProps } from './Time';

export default {
  title: 'Atoms/Time',
  component: Time,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomTimeProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Time {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  createdAt: new Date(),
};
