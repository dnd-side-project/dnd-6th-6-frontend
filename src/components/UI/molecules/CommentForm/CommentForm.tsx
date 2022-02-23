import { useForm } from 'react-hook-form';
import Avatar from '../../atoms/Avatar/Avatar';
import Button from '../../atoms/Button/Button';
import Textarea from '../../atoms/Textarea/Textarea';
import { StyledCommentForm } from './CommentFormStyled';

interface IForm {
  content: string;
}

export interface IMoleCommentFormProps {
  avatar: string; //Date
}

const CommentForm = ({ avatar }: IMoleCommentFormProps) => {
  const { register, handleSubmit } = useForm<IForm>();
  const onVaild = (data: IForm) => {
    console.log(data);
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
