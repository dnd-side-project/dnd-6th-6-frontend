import { Meta, Story } from '@storybook/react';
import Title, { IAtomTitleProps } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomTitleProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Title {...args}>Test</Title>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
