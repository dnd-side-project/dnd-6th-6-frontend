import { Meta, Story } from '@storybook/react';
import Main from './Main';

export default {
  title: 'Templates/Main',
  component: Main,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <div style={{ width: '375px', position: 'relative' }}>
      <Main {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
