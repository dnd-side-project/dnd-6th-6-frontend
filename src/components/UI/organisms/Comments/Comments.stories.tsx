import Comments, { IOrgCommentsProps } from './Comments';
import { Meta, Story } from '@storybook/react';

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
  comments: [
    {
      id: 2,
      writer: {
        id: 1,
        username: 'fjdksl546',
        first_name: '김세훈',
        user_profile: {
          id: 1,
          avatar: '',
        },
      },
      repeat_chore: {
        id: 21,
        information: {
          id: 1,
          name: '거실 청소하기',
          house: {
            id: 13,
            name: 'round-table',
          },
          category: {
            id: 2,
            name: '청소',
          },
        },
        assignees: [
          {
            id: 1,
            username: 'fjdksl546',
            first_name: '',
            user_profile: {
              id: 1,
            },
          },
          {
            id: 2,
            username: 'devhun58',
            first_name: '',
            user_profile: {
              id: 2,
            },
          },
        ],
        days: [
          {
            id: 4,
            name: '목',
          },
        ],
      },
      content: '테스트 댓글 1',
      writed_at: new Date(),
    },
    {
      id: 1,
      writer: {
        id: 1,
        username: 'fjdksl546',
        first_name: '김세훈',
        user_profile: {
          id: 1,
          avatar: '',
        },
      },
      repeat_chore: {
        id: 21,
        information: {
          id: 1,
          name: '거실 청소하기',
          house: {
            id: 13,
            name: 'round-table',
          },
          category: {
            id: 2,
            name: '청소',
          },
        },
        assignees: [
          {
            id: 1,
            username: 'fjdksl546',
            first_name: '',
            user_profile: {
              id: 1,
            },
          },
          {
            id: 2,
            username: 'devhun58',
            first_name: '',
            user_profile: {
              id: 2,
            },
          },
        ],
        days: [
          {
            id: 4,
            name: '목',
          },
        ],
      },
      content: '테스트 댓글 1',
      writed_at: new Date(),
    },
    {
      id: 3,
      writer: {
        id: 1,
        username: 'fjdksl546',
        first_name: '김세훈',
        user_profile: {
          id: 1,
          avatar: '',
        },
      },
      repeat_chore: {
        id: 21,
        information: {
          id: 1,
          name: '거실 청소하기',
          house: {
            id: 13,
            name: 'round-table',
          },
          category: {
            id: 2,
            name: '청소',
          },
        },
        assignees: [
          {
            id: 1,
            username: 'fjdksl546',
            first_name: '',
            user_profile: {
              id: 1,
            },
          },
          {
            id: 2,
            username: 'devhun58',
            first_name: '',
            user_profile: {
              id: 2,
            },
          },
        ],
        days: [
          {
            id: 4,
            name: '목',
          },
        ],
      },
      content: '테스트 댓글 1',
      writed_at: new Date(),
    },
    {
      id: 4,
      writer: {
        id: 1,
        username: 'fjdksl546',
        first_name: '김세훈',
        user_profile: {
          id: 1,
          avatar: '',
        },
      },
      repeat_chore: {
        id: 21,
        information: {
          id: 1,
          name: '거실 청소하기',
          house: {
            id: 13,
            name: 'round-table',
          },
          category: {
            id: 2,
            name: '청소',
          },
        },
        assignees: [
          {
            id: 1,
            username: 'fjdksl546',
            first_name: '',
            user_profile: {
              id: 1,
            },
          },
          {
            id: 2,
            username: 'devhun58',
            first_name: '',
            user_profile: {
              id: 2,
            },
          },
        ],
        days: [
          {
            id: 4,
            name: '목',
          },
        ],
      },
      content: '테스트 댓글 1',
      writed_at: new Date(),
    },
    {
      id: 5,
      writer: {
        id: 1,
        username: 'fjdksl546',
        first_name: '김세훈',
        user_profile: {
          id: 1,
          avatar: '',
        },
      },
      repeat_chore: {
        id: 21,
        information: {
          id: 1,
          name: '거실 청소하기',
          house: {
            id: 13,
            name: 'round-table',
          },
          category: {
            id: 2,
            name: '청소',
          },
        },
        assignees: [
          {
            id: 1,
            username: 'fjdksl546',
            first_name: '',
            user_profile: {
              id: 1,
            },
          },
          {
            id: 2,
            username: 'devhun58',
            first_name: '',
            user_profile: {
              id: 2,
            },
          },
        ],
        days: [
          {
            id: 4,
            name: '목',
          },
        ],
      },
      content: '테스트 댓글 1',
      writed_at: new Date(),
    },
  ],
};
