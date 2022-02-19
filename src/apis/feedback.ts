import axios from 'axios';

const BASE_URL = 'https://미정';

axios.defaults.baseURL = BASE_URL;

// 피드백 보내기
export const sendFeedbackAPI = ({ choreId, content }: { choreId: number; content: string }) => {
  return axios.post(`/chores/${choreId}/feedbacks`, { content }).then((response) => response.data);
};

// 피드백 목록
export const getFeedbackAPI = (choreId: number) => {
  return axios.get(`/chores/${choreId}/feedbacks`).then((response) => response.data);
};

// 피드백 상세보기
export const getDetailFeedbackAPI = (choreId: number, feedbackId: number) => {
  return axios.get(`/chores/${choreId}/feedbacks/${feedbackId}`).then((response) => response.data);
};
