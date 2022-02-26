import axios from 'axios';

const BASE_URL = 'http://ec2-13-125-38-145.ap-northeast-2.compute.amazonaws.com';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('Token')}`;

// 하우스 만들기
export const makeHouseAPI = async (name: string) => {
  return await axios.post(`/houses/`, { name });
};

// 하우스 구성원 목록
export const getMembersAPI = () => {
  return axios.get(`/houses/members`).then((response) => response.data);
};

// 하우스 구성원 초대
export const inviteHouseAPI = (email: { email: string }[]) => {
  return axios.post(`/houses/invite`, email);
};

// 하우스 구성원 초대 수락
export const inviteAcceptAPI = (invite_Id: number) => {
  return axios.patch(`/houses/invite/accept`, { invite_Id }).then((response) => response.data);
};
