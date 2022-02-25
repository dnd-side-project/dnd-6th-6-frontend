import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('Token')}`;

// 피드백 보내기
export const sendFeedbackAPI = ({ choreId, content, emoji }: { choreId: number; content: string; emoji: number }) => {
  return axios.post(`/chores/${choreId}/feedbacks/`, { content, emoji });
};

// 피드백 목록
export const getFeedbackAPI = (choreId: number) => {
  return axios.get(`/chores/${choreId}/feedbacks`).then((response) => response.data);
};

// 피드백 상세보기
export const getDetailFeedbackAPI = (choreId: number, feedbackId: number) => {
  return axios.get(`/chores/${choreId}/feedbacks/${feedbackId}`).then((response) => response.data);
};
