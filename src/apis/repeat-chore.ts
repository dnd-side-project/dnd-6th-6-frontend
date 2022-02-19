import axios from 'axios';

const BASE_URL = 'https://미정';

axios.defaults.baseURL = BASE_URL;

// 반복 집안일 생성
export const setRepeatChore = ({
  houseId,
  assignees,
  name,
  categoryId,
  days,
}: {
  houseId: number;
  assignees: { id: number }[];
  name: string;
  categoryId: number;
  days: { id: number }[];
}) => {
  return axios
    .post(`${BASE_URL}/houses/${houseId}/repeat-chores`, {
      assignees,
      information: {
        name,
        category: {
          id: categoryId,
        },
      },
      days,
    })
    .then((response) => response.data);
};

// 반복 집안일 전체 목록
export const getAllChoresAPI = (houseId: number) => {
  return axios.get(`${BASE_URL}/houses/${houseId}/repeat-chores`).then((response) => response.data);
};

// 반복 집안일 상세보기
export const getDetailRepeatChoreAPI = (houseId: number, choreId: number) => {
  return axios.get(`${BASE_URL}/houses/${houseId}/repeat-chores/${choreId}`).then((response) => response.data);
};

// 반복 집안일 수정 PATCH
export const editChoreAPI = ({
  houseId,
  choreId,
  assignees,
  name,
  categoryId,
  days,
}: {
  houseId: number;
  choreId: number;
  assignees: { id: number }[];
  name: string;
  categoryId: number;
  days: { id: number }[];
}) => {
  return axios
    .patch(`${BASE_URL}/houses/${houseId}/repeat-chores/${choreId}`, {
      assignees,
      information: {
        name,
        category: {
          id: categoryId,
        },
      },
      days,
    })
    .then((response) => response.data);
};

// 반복 집안일 삭제 DELETE
export const deleteRepeatChoreAPI = (houseId: number, choreId: number) => {
  return axios.delete(`${BASE_URL}/houses/${houseId}/repeat-chores/${choreId}`).then((response) => response.data);
};

// 반복 집안일 댓글 작성
export const setRepeatChoreCommentAPI = (choreId: number, content: string) => {
  return axios.post(`${BASE_URL}/repeat-chores/${choreId}/comments`, { content }).then((response) => response.data);
};

// 반복 집안일 댓글 목록
export const getRepeatChoreCommentAPI = (choreId: number) => {
  return axios.get(`${BASE_URL}/repeat-chores/${choreId}/comments`).then((response) => response.data);
};
