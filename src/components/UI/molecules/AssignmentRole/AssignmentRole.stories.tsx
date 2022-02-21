import { Meta, Story } from '@storybook/react';
import AssignmentRole, { IMoleAssignmentRoleProps } from './AssignmentRole';

export default {
  title: 'Molecules/AssignmentRole',
  component: AssignmentRole,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleAssignmentRoleProps> = (args) => (
  <>
    <AssignmentRole {...args}></AssignmentRole>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
