import { Meta, Story } from '@storybook/react';
import Header, { IMoleHeaderProps } from './Header';

export default {
  Header: 'Molecules/Header',
  component: Header,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleHeaderProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header {...args}></Header>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: '회원가입',
  to: '/join',
};
