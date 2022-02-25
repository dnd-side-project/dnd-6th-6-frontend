import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('Token') || ''}`;

// 부탁 보내기
export const sendFavor = ({ choreId, toId, content }: { choreId: number; toId: number; content: string }) => {
  return axios.post(`/chores/${choreId}/favor`, {
    to: {
      id: toId,
    },
    content,
  });
};

// 부탁 목록 GET
export const getFavors = (choreId: number) => {
  return axios.get(`/chores/${choreId}/favor`).then((response) => response.data);
};

// 부탁 수락 PATCH
export const receiveFavor = (choreId: number, favorId: number) => {
  return axios.patch(`/chores/${choreId}/favor/${favorId}/accept`);
};

// 부탁 상세보기 GET
export const favoreDetailAPI = (choreId: number, favorId: number) => {
  return axios.get(`/chores/${choreId}/favor/${favorId}/accept`).then((response) => response.data);
};
