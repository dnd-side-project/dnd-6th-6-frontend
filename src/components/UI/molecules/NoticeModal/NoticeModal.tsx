import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { NoticeModalWrapper, StyledNoticeModal } from './NoticeModalStyled';

export interface IMoleNoticeModalProps {
  noticeId?: number;
  setShowNoticeModal: Dispatch<SetStateAction<boolean>>;
}

const NoticeModal = ({ noticeId, setShowNoticeModal }: IMoleNoticeModalProps) => {
  const onClick = () => {
    setShowNoticeModal((prev) => !prev);
  };
  const onClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const onClickNoticeFix = useCallback(() => {
    // 고정하기
    setShowNoticeModal((prev) => !prev);
  }, [noticeId, setShowNoticeModal]);
  const onClickNoticeEdit = useCallback(() => {
    // 수정하기
    setShowNoticeModal((prev) => !prev);
  }, [noticeId, setShowNoticeModal]);
  const onClickNoticeDelete = useCallback(() => {
    // 삭제하기
    setShowNoticeModal((prev) => !prev);
  }, [noticeId, setShowNoticeModal]);
  return (
    <NoticeModalWrapper onClick={onClick}>
      <StyledNoticeModal onClick={onClickModal}>
        <div onClick={onClickNoticeFix} className="noticeModal_fix">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 9V4H17C17.55 4 18 3.55 18 3C18 2.45 17.55 2 17 2H7C6.45 2 6 2.45 6 3C6 3.55 6.45 4 7 4H8V9C8 10.66 6.66 12 5 12V14H10.97V21L11.97 22L12.97 21V14H19V12C17.34 12 16 10.66 16 9Z"
              fill="#3F4245"
            />
          </svg>
          <span>고정하기</span>
        </div>
        <div onClick={onClickNoticeEdit} className="noticeModal_edit">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.625 15.094V18.3752H5.90625L15.5837 8.69773L12.3025 5.41648L2.625 15.094ZM18.1212 6.16023C18.4625 5.81898 18.4625 5.26773 18.1212 4.92648L16.0738 2.87898C15.7325 2.53773 15.1812 2.53773 14.84 2.87898L13.2388 4.48023L16.52 7.76148L18.1212 6.16023Z"
              fill="#3F4245"
            />
          </svg>
          <span>편집하기</span>
        </div>
        <div onClick={onClickNoticeDelete} className="noticeModal_delete">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
              fill="#3F4245"
            />
          </svg>
          <span>삭제하기</span>
        </div>
      </StyledNoticeModal>
      ;
    </NoticeModalWrapper>
  );
};

export default NoticeModal;
