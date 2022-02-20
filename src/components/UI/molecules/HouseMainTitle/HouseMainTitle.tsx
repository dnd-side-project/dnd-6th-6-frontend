import Title from '../../atoms/Title/Title';
import { StyledHouseMainTitle } from './HouseMainTitleStyled';

export interface IMoleHouseMainTitleProps {
  first_name?: string;
  house_name?: string;
}

const HouseMainTitle = ({ first_name, house_name }: IMoleHouseMainTitleProps) => {
  return (
    <StyledHouseMainTitle>
      <span>{house_name}</span>
      <Title fontWeight="800" fontSize="20px" color="#303030" mb="8px">
        안녕하세요 {first_name}님!
      </Title>
      {house_name ? (
        <Title fontWeight="800" fontSize="20px" color="#303030">
          하우스의 하루를 시작해볼까요?
        </Title>
      ) : (
        <Title fontWeight="800" fontSize="20px" color="#303030">
          아직 참여한 하우스가 없네요.
        </Title>
      )}
    </StyledHouseMainTitle>
  );
};

export default HouseMainTitle;
