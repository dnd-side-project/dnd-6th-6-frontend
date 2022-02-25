import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('Token')}`;

export const getNotificationAPI = () => {
  return axios.get(`/notifications`).then((response) => response.data);
};
