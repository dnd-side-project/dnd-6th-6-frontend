import Comments, { IOrgCommentsProps } from './Comments';
import { Meta, Story } from '@storybook/react';
import { onetimeComment1, onetimeComment2, onetimeComment3, onetimeComment4 } from '../../../../dummyData/dummyComment';

export default {
  title: 'organisms/Comments',
  component: Comments,
} as Meta;

const Template: Story<IOrgCommentsProps> = (args) => (
  <>
    <Comments {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  comments: [onetimeComment1, onetimeComment2, onetimeComment3, onetimeComment4],
};
