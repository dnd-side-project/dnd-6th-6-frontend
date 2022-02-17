import { Meta, Story } from '@storybook/react';
import CardButton, { IAtomCardButtonProps } from './CardButton';

export default {
  title: 'Atoms/CardButton',
  component: CardButton,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomCardButtonProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardButton {...args} className="meComplete">
        완료
      </CardButton>
      <hr />
      <CardButton {...args} className="meIncomplete">
        미완료
      </CardButton>
      <hr />
      <CardButton {...args} className="houseComplete">
        완료
      </CardButton>
      <hr />
      <CardButton {...args} className="houseIncomplete">
        미완료
      </CardButton>
      <hr />
      <CardButton {...args} className="noticeFix">
        고정
      </CardButton>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
