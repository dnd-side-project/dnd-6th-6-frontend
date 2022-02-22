import { Meta, Story } from '@storybook/react';
import StoriesLayout from '../../Layouts/Stories/StoriesLayout';
import EventDetail, { ITempEventDetailProps } from './EventDetail';

export default {
  title: 'Templates/EventDetail',
  component: EventDetail,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<ITempEventDetailProps> = (args) => (
  <>
    <StoriesLayout>
      <EventDetail {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  chore: {
    id: 21,
    completed_at: new Date(),
    planned_at: new Date(),
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
        username: '수진',
        first_name: '수진',
        user_profile: {
          id: 1,
        },
      },
      {
        id: 2,
        username: '영수',
        first_name: '영수',
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
        completed_at: new Date(),
        planned_at: new Date(),
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
        completed_at: new Date(),
        planned_at: new Date(),
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
        completed_at: new Date(),
        planned_at: new Date(),
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
        completed_at: new Date(),
        planned_at: new Date(),
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
        completed_at: new Date(),
        planned_at: new Date(),
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
      id: 9,
      writer: {
        id: 1,
        username: 'fjdksl546',
        first_name: '김세훈',
        user_profile: {
          id: 1,
          avatar: '',
        },
      },
      chore: {
        id: 23,
        completed_at: new Date(),
        planned_at: new Date(),
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
      },
      content: '테스트 댓글 1',
      writed_at: new Date(),
    },
  ],
  me: {
    id: 1,
    first_name: '수진',
    username: 'wadaw',
    user_profile: {
      id: 14,
      avatar: '',
    },
  },
};
