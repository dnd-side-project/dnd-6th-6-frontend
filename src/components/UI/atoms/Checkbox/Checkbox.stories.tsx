import { Meta, Story } from '@storybook/react';
import Checkbox, { IAtomCheckboxProps } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomCheckboxProps> = (args) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Checkbox {...args} labelFor="a">
        항목을 선택해주세요.
      </Checkbox>
      <Checkbox {...args} labelFor="c">
        항목을 선택해주세요.
      </Checkbox>
      <Checkbox {...args} labelFor="b">
        항목을 선택해주세요.
      </Checkbox>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
