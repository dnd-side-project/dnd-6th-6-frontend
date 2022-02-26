import axios from 'axios';

const BASE_URL = 'http://ec2-13-125-38-145.ap-northeast-2.compute.amazonaws.com';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('Token')}`;

// 공지사항 만들기
export const setNoticeAPI = ({ houseId, content }: { houseId: number; content: string }) => {
  return axios.post(`/houses/${houseId}/notices/`, { content });
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
  return axios.delete(`/houses/${houseId}/notices/${noticeId}/`);
};
