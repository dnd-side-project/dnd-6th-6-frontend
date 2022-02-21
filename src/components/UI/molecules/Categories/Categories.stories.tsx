import { Meta, Story } from '@storybook/react';
import Categories, { IMoleCategoriesProps } from './Categories';

export default {
  title: 'Molecules/Categories',
  component: Categories,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMoleCategoriesProps> = (args) => (
  <>
    <Categories {...args}></Categories>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
