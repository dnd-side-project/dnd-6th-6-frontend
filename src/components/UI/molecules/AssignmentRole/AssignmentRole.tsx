import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Title from '../../atoms/Title/Title';
import { StyledAssignmentRole, StyledAssignmentRoleModal } from './AssignmentRoleStyled';

const roles = ['선택 인원 고정', '한명씩 교대로', '한명씩 랜덤하게'];

export interface IMoleAssignmentRoleProps {
  mb?: string;
  chooseRole: string;
  onClickRole: (role: string) => void;
}

const AssignmentRole = ({ chooseRole, mb, onClickRole }: IMoleAssignmentRoleProps) => {
  const [showModal, setShowModal] = useState(false);
  const onClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <>
      <StyledAssignmentRole mb={mb || '0px'} chooseRole={chooseRole} onClick={() => setShowModal((prev) => !prev)}>
        <span>{!chooseRole ? '역학분담 방식을 선택해주세요!' : chooseRole}</span>
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-1.11547e-06 10.9273L1.0617 12L7 6L1.0617 7.65789e-07L-2.53954e-07 1.07273L4.87661 6L-1.11547e-06 10.9273Z"
            fill="#5B656D"
          />
        </svg>
      </StyledAssignmentRole>
      {showModal && (
        <StyledAssignmentRoleModal onClick={() => setShowModal((prev) => !prev)}>
          <div className="assignmentRole_modal" onClick={onClickModal}>
            <Title color="#3F4245" fontSize="17px" mb="24px">
              역할분담 방식 선택하기
            </Title>
            <div className="assignmentRole_role">
              {roles.map((role, index) => (
                <Checkbox onClick={() => onClickRole(role)} key={role + index} labelFor={role}>
                  {role}
                </Checkbox>
              ))}
            </div>
            <Button onClick={() => setShowModal((prev) => !prev)} className="basic">
              선택 완료
            </Button>
          </div>
        </StyledAssignmentRoleModal>
      )}
    </>
  );
};

export default AssignmentRole;
