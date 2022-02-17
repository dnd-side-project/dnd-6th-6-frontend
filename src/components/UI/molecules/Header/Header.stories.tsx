import { Meta, Story } from '@storybook/react';
import Header, { IMoleHeaderProps } from './Header';

export default {
  title: 'Molecules/Header',
  component: Header,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleHeaderProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header {...args}></Header>
      <hr />
      <Header {...args} itemCount={3} threeItemContent="글쓰기"></Header>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: '회원가입',
  to: '/join',
};
