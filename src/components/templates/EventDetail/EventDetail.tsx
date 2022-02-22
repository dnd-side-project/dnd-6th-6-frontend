import { useNavigate } from 'react-router';
import { Chore, RepeatChore } from '../../../interfaces/chore';
import { ChoreComment, RepeatChoreComment } from '../../../interfaces/comment';
import { User } from '../../../interfaces/user';
import { categoryImgURLs } from '../../../utils/category';
import CommentForm from '../../UI/molecules/CommentForm/CommentForm';
import Header from '../../UI/molecules/Header/Header';
import Comments from '../../UI/organisms/Comments/Comments';
import EventDetailHeader from '../../UI/organisms/EventDetailHeader/EventDetailHeader';
import { StyledEventDetail } from './EventDetailStyled';

const chore = {
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
};
const comments = [
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
];
const me = {
  id: 1,
  first_name: '수진',
  username: 'wadaw',
  user_profile: {
    id: 14,
    avatar: '',
  },
};

export interface ITempEventDetailProps {
  // 나중에 ?지워야함
  chore?: RepeatChore | Chore;
  comments?: (RepeatChoreComment | ChoreComment)[];
  me?: User;
}

const EventDetail = (props: ITempEventDetailProps) => {
  const navigate = useNavigate();
  // chore type guard
  function isRepeatChoreType(object: any): object is RepeatChore {
    return 'days' in object;
  }
  const goBack = () => {
    navigate(-1);
  };
  const goEditEvent = () => {
    navigate('/event/make', { state: chore });
  };
  return (
    <StyledEventDetail>
      <div className="eventDetail_info">
        {chore.assignees.filter((assignee) => assignee.id === me.id).length === 1 ? (
          <Header
            onClick={goBack}
            onClickThreeItem={goEditEvent}
            title="일정 상세보기"
            threeItemContent="편집"
            itemCount={3}
            mb="10px"
          />
        ) : (
          <Header onClick={goBack} title="일정 상세보기" />
        )}
        {isRepeatChoreType(chore) ? (
          <>
            <div className="eventDetail_category">
              <img src={categoryImgURLs.filter((categoryImgURL) => categoryImgURL.id === 1)[0].src} />
            </div>
            <EventDetailHeader
              name={chore.information.name}
              planned_at={chore.planned_at}
              completed_at={chore.completed_at}
              assignees={chore.assignees}
              isRepeatChore={true}
            />
          </>
        ) : (
          <EventDetailHeader
            name={chore.information.name}
            planned_at={chore.planned_at}
            completed_at={chore.completed_at}
            assignees={chore.assignees}
            isRepeatChore={false}
          />
        )}
      </div>
      <Comments comments={comments} />
      <CommentForm avatar={me.user_profile.avatar || ''} />
    </StyledEventDetail>
  );
};

export default EventDetail;
