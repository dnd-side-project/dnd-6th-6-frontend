import axios from 'axios';

const BASE_URL = 'https://미정';

axios.defaults.baseURL = BASE_URL;

// 부탁 보내기
export const sendFavor = ({ choreId, toId, content }: { choreId: number; toId: number; content: string }) => {
  return axios
    .post(`${BASE_URL}/chores/${choreId}/favor`, {
      to: {
        id: toId,
      },
      content,
    })
    .then((response) => response.data);
};

// 부탁 목록 GET
export const getFavors = (choreId: number) => {
  return axios.get(`${BASE_URL}/chores/${choreId}/favor`).then((response) => response.data);
};

// 부탁 수락 PATCH
export const receiveFavor = (choreId: number, favorId: number) => {
  return axios.patch(`${BASE_URL}/chores/${choreId}/favor/${favorId}/accept`).then((response) => response.data);
};
