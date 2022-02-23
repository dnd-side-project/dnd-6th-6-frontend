import { Notice } from '../interfaces/notice';
import { user1, user2, user3 } from './dummyUser';

export const notice1: Notice = {
  id: 1,
  writed_at: new Date(),
  updated_at: new Date(),
  content: '금요일에 모여서 다 같이 대청소해요! 시간 되는 분들은 모두 모여주시면 좋을 것 같습니다.',
  writer: user1,
};

export const notice2: Notice = {
  id: 2,
  writed_at: new Date(),
  updated_at: new Date(),
  content:
    '세탁기가 고장나서 수리 기사님이 하우스에 방문할 예정이라고 합니다. 2시쯤 집에 계시는 분이 있으면 문을 열어주세요.',
  writer: user2,
};

export const notice3: Notice = {
  id: 3,
  writed_at: new Date(),
  updated_at: new Date(),
  content: '내일 오전 10시부터 오후 4시까지 주택 시설 점검 때문에 단수 예정이래요!',
  writer: user3,
};

export const notice4: Notice = {
  id: 4,
  writed_at: new Date(),
  updated_at: new Date(),
  content: '내일 오전 10시부터 오후 4시까지 주택 시설 점검 때문에 단수 예정이래요!',
  writer: user3,
};

export const notice5: Notice = {
  id: 5,
  writed_at: new Date(),
  updated_at: new Date(),
  content: '내일 오전 10시부터 오후 4시까지 주택 시설 점검 때문에 단수 예정이래요!',
  writer: user3,
};

export const notice6: Notice = {
  id: 6,
  writed_at: new Date(),
  updated_at: new Date(),
  content: '내일 오전 10시부터 오후 4시까지 주택 시설 점검 때문에 단수 예정이래요!',
  writer: user3,
};
