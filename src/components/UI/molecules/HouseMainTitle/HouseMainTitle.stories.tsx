import HouseMainTitle, { IMoleHouseMainTitleProps } from './HouseMainTitle';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Molecules/HouseMainTitle',
  component: HouseMainTitle,
} as Meta;

const Template: Story<IMoleHouseMainTitleProps> = (args) => (
  <>
    <HouseMainTitle {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  first_name: '지수',
  house_name: '서울하우스',
};
