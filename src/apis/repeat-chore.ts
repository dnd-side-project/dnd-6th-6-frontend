import axios from 'axios';

const BASE_URL = 'http://ec2-13-125-38-145.ap-northeast-2.compute.amazonaws.com';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('Token')}`;

// 반복 집안일 생성
export const setRepeatChoreAPI = ({
  houseId,
  assignees,
  name,
  category,
  days,
  allotcaion_method,
  planned_at,
}: {
  houseId: number;
  assignees: { id: number }[];
  name: string;
  category: { id: number };
  days: { id: number }[];
  allotcaion_method: number;
  planned_at: string;
}) => {
  return axios.post(`/houses/${houseId}/repeat-chores/`, {
    assignees,
    information: {
      name,
      category,
    },
    days,
    allocation_method: allotcaion_method,
    planned_at,
  });
};

// 반복 집안일 전체 목록
export const getAllRepeatChoresAPI = (houseId: number) => {
  return axios.get(`/houses/${houseId}/repeat-chores`).then((response) => response.data);
};

// 반복 집안일 상세보기
export const getDetailRepeatChoreAPI = (houseId: number, choreId: number) => {
  return axios.get(`/houses/${houseId}/repeat-chores/${choreId}`).then((response) => response.data);
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
    .patch(`/houses/${houseId}/repeat-chores/${choreId}/`, {
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
  return axios.delete(`/houses/${houseId}/repeat-chores/${choreId}`).then((response) => response.data);
};

// 반복 집안일 댓글 작성
export const setRepeatChoreCommentAPI = (choreId: number, content: string) => {
  return axios.post(`/repeat-chores/${choreId}/comments/`, { content });
};

// 반복 집안일 댓글 목록
export const getRepeatChoreCommentAPI = (choreId: number) => {
  return axios.get(`/repeat-chores/${choreId}/comments`).then((response) => response.data);
};
