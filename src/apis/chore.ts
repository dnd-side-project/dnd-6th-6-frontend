import axios from 'axios';

const BASE_URL = 'https://미정';

axios.defaults.baseURL = BASE_URL;

// 일회성 집안일 생성
export const setChoreAPI = ({
  houseId,
  assignees,
  name,
  categoryId,
  planned_at,
}: {
  houseId: number;
  assignees: { id: number }[];
  name: string;
  categoryId: number;
  planned_at: Date;
}) => {
  return axios
    .post(`${BASE_URL}/houses/${houseId}/chores`, {
      assignees,
      information: {
        name,
        category: {
          id: categoryId,
        },
      },
      planned_at,
    })
    .then((response) => response.data);
};

// 일회성 집안일 전체 목록
export const getAllChoresAPI = (houseId: number) => {
  return axios.get(`${BASE_URL}/houses/${houseId}/chores`).then((response) => response.data);
};

// 일회성 집안일 상세보기
export const getDetailChoreAPI = (houseId: number, choreId: number) => {
  return axios.get(`${BASE_URL}/houses/${houseId}/chores/${choreId}`).then((response) => response.data);
};

// 일회성 집안일 수정 PATCH houses/:house/chores/:chore
export const editChoreAPI = ({
  houseId,
  choreId,
  assignees,
  name,
  categoryId,
  planned_at,
}: {
  houseId: number;
  choreId: number;
  assignees: { id: number }[];
  name: string;
  categoryId: number;
  planned_at: Date;
}) => {
  return axios
    .patch(`${BASE_URL}/houses/${houseId}/chores/${choreId}`, {
      assignees,
      information: {
        name,
        category: {
          id: categoryId,
        },
      },
      planned_at,
    })
    .then((response) => response.data);
};

//일회성 집안일 삭제 DELETE houses/:house/chores/:chore
export const deleteChoreAPI = (houseId: number, choreId: number) => {
  return axios.delete(`${BASE_URL}/houses/${houseId}/chores/${choreId}`).then((response) => response.data);
};

// 일회성 집안일 댓글 작성
export const setChoreCommentAPI = (choreId: number, content: string) => {
  return axios.post(`${BASE_URL}/chores/${choreId}/comments`, { content }).then((response) => response.data);
};

// 일회성 집안일 댓글 목록
export const getChoreCommentAPI = (choreId: number) => {
  return axios.get(`${BASE_URL}/chores/${choreId}/comments`).then((response) => response.data);
};
