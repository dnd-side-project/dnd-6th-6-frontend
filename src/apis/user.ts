import axios from 'axios';
import { User } from '../interfaces/user';
const BASE_URL = 'http://ec2-13-125-38-145.ap-northeast-2.compute.amazonaws.com';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('Token')}`;

// 모든 유저 목록
export const getAllUserAPI = () => {
  return axios.get(`/users`).then((response) => response.data);
};

// 유저 정보 반환
export const getUserAPI = async (userId: number) => {
  return await axios.get(`/users/${userId}`).then((response) => response.data);
};

// 회원가입 - 이메일 입력, 인증 코드 전송
export const sendJoinEmailAPI = (signup_email: string) => {
  return axios.post(`/users/email`, { signup_email });
};

// 회원가입 - 인증 코드 입력
export const sendCodeAPI = (code: string) => {
  return axios.post(`/users/code`, { code }).then((response) => response.data);
};

// 회원가입 - 비번 입력
export const sendJoinPassword = (data: { signup_email: any; password: string; ck_password: string }) => {
  return axios.post(`/users/password`, data).then((response) => response.data);
};

// 회원가입 - 프로필 입력
export const setProfileAPI = (data: { signup_email: any; name: string }) => {
  return axios.post(`/users/profile`, data);
};

// 로그인  - 이메일 입력
export const sendLoginEmailAPI = (login_email: string) => {
  return axios.post(`/users/login/email`, { login_email });
};

// 로그인  - 비번 입력
export const sendLoginPasswordAPI = async (data: { login_email: string; password: string }) => {
  return await axios.post<User>(`/users/login/password`, data);
};

// 로그아웃
export const logoutAPI = () => {
  return axios.get(`/users/logout`).then((response) => response.data);
};

// 로그인  - 카카오톡
export const kakaoLoginAPI = () => {
  return axios.get(`/users/login/kakao/`).then((response) => response.data);
};

// 로그인  - 네이버
export const naverLoginAPI = () => {
  return axios.get(`/users/login/naver`).then((response) => response.data);
};

// 로그인한 user 정보
export const getLoginUser = async () => {
  // token 붙이기
  return await axios.get(`/users/mypage/profile`).then((response) => response.data);
};

// 오늘 내 할일 목록
export const todayChoresMeAPI = (houseId: number) => {
  return axios.get(`/houses/${houseId}/chores/mine`).then((response) => response.data);
};

// 오늘 남의 할일 목록
export const todayChoresOthersAPI = (houseId: number) => {
  return axios.get(`/houses/${houseId}/chores/others`).then((response) => response.data);
};
