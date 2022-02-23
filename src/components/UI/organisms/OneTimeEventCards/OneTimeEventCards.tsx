import { chore1, chore2, chore3 } from '../../../../dummyData/dummyChore';
import Title from '../../atoms/Title/Title';
import OneTimeEventCard from '../../molecules/OneTimeEventCard/OneTimeEventCard';
import { StyledOneTimeEventCards } from './OneTimeEventCardsStyled';

const oneTimeChores = [chore1, chore2, chore3];

export interface IOrgOneTimeEventCardsProps {}

const OneTimeEventCards = (props: IOrgOneTimeEventCardsProps) => {
  return (
    <StyledOneTimeEventCards>
      <Title color="#3F4245" fontSize="17px" mb="16px">
        일회성 일정
      </Title>
      <div className="oneTimeEventCards">
        {oneTimeChores.map((oneTimeChore) => (
          <OneTimeEventCard chore={oneTimeChore} />
        ))}
      </div>
    </StyledOneTimeEventCards>
  );
};

export default OneTimeEventCards;
