import AppLayout from '../../Layouts/Applayout';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import { StyledRequest } from './RequestStyled';

export interface ITempRequestProps {}

const Request = (props: ITempRequestProps) => {
  return (
    <StyledRequest>
      <AppLayout>
        <Header mb="40px" title="부탁하기" />
        <Title mb="150px" fontWeight="700" fontSize="23px" lineHeight="33.25px">
          다용도실 청소를
          <br />
          누구에게 부탁할까요?
        </Title>
      </AppLayout>
    </StyledRequest>
  );
};

export default Request;
