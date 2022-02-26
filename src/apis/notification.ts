import axios from 'axios';

const BASE_URL = 'http://ec2-13-125-38-145.ap-northeast-2.compute.amazonaws.com';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('Token')}`;

export const getNotificationAPI = () => {
  return axios.get(`/notifications`).then((response) => response.data);
};

export const patchfeedNotificationAPI = (id: number) => {
  return axios.patch(`/notifications/${id}?type=feedback`).then((response) => response.data);
};
export const patchfavorNotificationAPI = (id: number) => {
  return axios.patch(`/notifications/${id}?type=favor`).then((response) => response.data);
};
export const patchnoticeNotificationAPI = (id: number) => {
  return axios.patch(`/notifications/${id}?type=notice`).then((response) => response.data);
};
