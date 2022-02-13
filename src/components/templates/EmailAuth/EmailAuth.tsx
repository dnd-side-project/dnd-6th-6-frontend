import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';

import { StyledEmailAuth, StyledForm, TextInputWrapper } from './EmailAuthStyled';

interface IEmailAuthForm {
  code: string;
}

const EmailAuth = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IEmailAuthForm>();

  const onVaild = (data: IEmailAuthForm) => {
    console.log(data);
    //axios요청으로 해당 code가 맞는지 check
    //setError('code', { message: '인증코드가 일치하지 않습니다.' }, { shouldFocus: true });
    navigate('/join/password');
  };
  if (!state) {
    navigate('/join/email');
  }
  const goBack = () => {
    navigate(-1);
  };
  return (
    <AppLayout>
      <StyledEmailAuth>
        <Header onClick={goBack} mb="35px" title="회원가입" />
        <Title mb="24px" color="#3F4245" fontSize="20px" fontWeight="700" lineHeight="33.35px">
          {state}로 전송된
          <br />
          인증코드를 입력해주세요
        </Title>
        <StyledForm onSubmit={handleSubmit(onVaild)}>
          <TextInputWrapper>
            <TextInput
              register={{
                ...register('code', {
                  required: '인증코드를 입력하세요',
                }),
              }}
              placeholder=""
              labelText="인증코드"
              message={errors.code?.message || ''}
            >
              <div className="email_resend">재발송</div>
            </TextInput>
          </TextInputWrapper>
          <Button className="basic">다음</Button>
        </StyledForm>
      </StyledEmailAuth>
    </AppLayout>
  );
};

export default EmailAuth;
