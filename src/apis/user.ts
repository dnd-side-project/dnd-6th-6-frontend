import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

axios.defaults.baseURL = BASE_URL;

// 모든 유저 목록
export const getAllUserAPI = () => {
  return axios.get(`/users`).then((response) => response.data);
};

// 유저 정보 반환
export const getUserAPI = (userId: number) => {
  return axios.get(`/users/${userId}`).then((response) => response.data);
};

// 회원가입 - 이메일 입력, 인증 코드 전송
export const sendJoinEmailAPI = (signup_email: any) => {
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
export const setProfileAPI = (data: { signup_email: string; name: string; gender: string }) => {
  return axios.post(`/users/profile`, data).then((response) => response.data);
};

// 로그인  - 이메일 입력
export const sendLoginEmailAPI = (login_email: string) => {
  return axios.post(`/users/login/email`, { login_email });
};

// 로그인  - 비번 입력
export const sendLoginPasswordAPI = (data: { login_email: string; password: string }) => {
  return axios.post(`/users/login/password`, data);
};

// 로그아웃
export const logoutAPI = () => {
  return axios.get(`/users/logout`).then((response) => response.data);
};

// 로그인  - 카카오톡
export const kakaoLoginAPI = () => {
  return axios.get(`/users/login/kakao`).then((response) => response.data);
};

// 로그인  - 네이버
export const naverLoginAPI = () => {
  return axios.get(`/users/login/naver`).then((response) => response.data);
};

// 오늘 내 할일 목록
export const todayChoresMeAPI = (houseId: number) => {
  return axios.get(`/houses/${houseId}/chores/mine`).then((response) => response.data);
};

// 오늘 남의 할일 목록
export const todayChoresOthersAPI = (houseId: number) => {
  return axios.get(`/houses/${houseId}/chores/others`).then((response) => response.data);
};
