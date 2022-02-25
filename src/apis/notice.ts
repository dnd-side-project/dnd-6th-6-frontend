import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('Token') || ''}`;
// 공지사항 만들기
export const setNoticeAPI = ({ houseId, title, content }: { houseId: number; title: string; content: string }) => {
  return axios.post(`/houses/${houseId}/notices`, { title, content }).then((response) => response.data);
};

// 공지사항 목록
export const getNoticeAPI = (houseId: number) => {
  return axios.get(`/houses/${houseId}/notices`).then((response) => response.data);
};

// 공지사항 상세보기
export const getDetailNoticeAPI = (houseId: number, noticeId: number) => {
  return axios.get(`/houses/${houseId}/notices/${noticeId}`).then((response) => response.data);
};

// 공지사항 수정
export const editNoticeAPI = ({
  houseId,
  noticeId,
  userId,
  title,
  content,
}: {
  houseId: number;
  noticeId: number;
  userId: number;
  title: string;
  content: string;
}) => {
  return axios
    .patch(`/houses/${houseId}/notices/${noticeId}`, {
      writer: { id: userId },
      title,
      content,
    })
    .then((response) => response.data);
};

// 공지사항 삭제
export const deleteNoticeAPI = (houseId: number, noticeId: number) => {
  return axios.delete(`/houses/${houseId}/notices/${noticeId}`).then((response) => response.data);
};
