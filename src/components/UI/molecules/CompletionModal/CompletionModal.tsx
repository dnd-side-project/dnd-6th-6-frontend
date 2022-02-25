import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { returnEditChoreAPI } from '../../../../apis/chore';
import { Chore } from '../../../../interfaces/chore';
import { User } from '../../../../interfaces/user';
import { StyledCompletionModal } from './CompletionModalStyled';

export interface IMoleCompletionModalProps {
  showCompletionModal: boolean;
  setShowCompletionModal: React.Dispatch<React.SetStateAction<boolean>>;
  chore: Chore;
}

const CompletionModal = ({ showCompletionModal, setShowCompletionModal, chore }: IMoleCompletionModalProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<
    Chore,
    AxiosError,
    {
      houseId: number;
      choreId: number;
      assignees: User[];
      name: string;
      categoryId: number;
      planned_at: Date;
      completed_at: Date;
    }
  >('editChore', returnEditChoreAPI, {
    onError: (error) => {
      // 에러가 났음
      console.log(error);
    },
    onSuccess: (data) => {
      // 성공
      queryClient.refetchQueries(['todayChores', 'me']);
      queryClient.refetchQueries(['chore', `${chore.id}`]);
    },
    onSettled: () => {
      setShowCompletionModal((prev) => !prev);
    },
  });

  const onCliclCompletionModalWrapper = (e: React.MouseEvent<HTMLElement>) => {
    setShowCompletionModal((prev) => !prev);
  };
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  const onClickCancel = () => {
    setShowCompletionModal((prev) => !prev);
  };
  const onClickCompletion = () => {
    mutation.mutate({
      houseId: chore.assignees[0].user_profile.house?.id as number,
      choreId: chore.id,
      assignees: chore.assignees,
      name: chore.information.name,
      categoryId: chore.information.category.id,
      planned_at: chore.planned_at,
      completed_at: new Date(),
    });
  };
  return (
    <StyledCompletionModal onClick={onCliclCompletionModalWrapper}>
      <div className="completionModal" onClick={onClickModal}>
        <div className="completionModal_title">일정을 완료할까요?</div>
        <div className="completionModal_button">
          <div className="completionModal_cancel" onClick={onClickCancel}>
            취소
          </div>
          <div className="completionModal_complete" onClick={onClickCompletion}>
            확인
          </div>
        </div>
      </div>
    </StyledCompletionModal>
  );
};

export default CompletionModal;
