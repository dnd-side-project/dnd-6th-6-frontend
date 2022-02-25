import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { setChoreCommentAPI } from '../../../../apis/chore';
import { setRepeatChoreCommentAPI } from '../../../../apis/repeat-chore';
import Avatar from '../../atoms/Avatar/Avatar';
import Button from '../../atoms/Button/Button';
import Textarea from '../../atoms/Textarea/Textarea';
import { StyledCommentForm } from './CommentFormStyled';

interface IForm {
  content: string;
}

export interface IMoleCommentFormProps {
  avatar: string; //Date
  isOneTime: boolean;
  choreId: number;
}

const CommentForm = ({ avatar, isOneTime, choreId }: IMoleCommentFormProps) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, setValue } = useForm<IForm>();
  const onVaild = (data: IForm) => {
    if (isOneTime) {
      setChoreCommentAPI(choreId, data.content)
        .then(() => {
          queryClient.refetchQueries(['chore', `${choreId}`]);
          setValue('content', '');
        })
        .catch((e) => console.log(e));
    } else {
      setRepeatChoreCommentAPI(choreId, data.content)
        .then(() => {
          queryClient.refetchQueries(['repeatChore', `${choreId}`]);
          setValue('content', '');
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <StyledCommentForm onSubmit={handleSubmit(onVaild)}>
      <Avatar imgUrl={avatar} width="26px" height="26px">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V21C24 17.01 16.005 15 12 15Z"
            fill="#9BCFFF"
          />
        </svg>
      </Avatar>
      <Textarea
        register={{
          ...register('content', {
            required: '댓글을 입력해주세요',
          }),
        }}
        placeholder="댓글을 입력해주세요"
        bgColor="inherit"
      />
      <Button color="#5BADFF" width="fit-content" height="fix-content" bgColor="inherit">
        게시
      </Button>
    </StyledCommentForm>
  );
};

export default CommentForm;
