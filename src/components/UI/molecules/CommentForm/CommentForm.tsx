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
      <Avatar imgUrl={avatar} width="26px" height="26px" />
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
