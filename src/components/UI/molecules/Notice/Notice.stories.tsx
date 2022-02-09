import { Meta, Story } from '@storybook/react';
import Notice, { IMoleNoticeProps } from './Notice';

export default {
  title: 'Molecules/Notice',
  component: Notice,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleNoticeProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Notice {...args}></Notice>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  notice_title: '금요일에 모여서 다같이 대청소 하는 것은 어떨까요?',
};
