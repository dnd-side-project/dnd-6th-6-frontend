import axios from 'axios';

const BASE_URL = 'https://미정';

axios.defaults.baseURL = BASE_URL;

export const getNotificationAPI = () => {
  return axios.get(`/notifications`).then((response) => response.data);
};
