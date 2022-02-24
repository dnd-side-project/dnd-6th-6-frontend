import { Link } from 'react-router-dom';
import { chore1, chore2, chore3 } from '../../../../dummyData/dummyChore';
import { Chore } from '../../../../interfaces/chore';
import Title from '../../atoms/Title/Title';
import OneTimeEventCard from '../../molecules/OneTimeEventCard/OneTimeEventCard';
import { StyledOneTimeEventCards } from './OneTimeEventCardsStyled';

// const oneTimeChores = [chore1, chore2, chore3];

export interface IOrgOneTimeEventCardsProps {
  oneTimeChores: Chore[];
}

const OneTimeEventCards = ({ oneTimeChores }: IOrgOneTimeEventCardsProps) => {
  return (
    <StyledOneTimeEventCards>
      <Title color="#3F4245" fontSize="17px" mb="16px">
        일회성 일정
      </Title>
      <div className="oneTimeEventCards">
        {oneTimeChores.map((oneTimeChore) => (
          <Link to={`/event/onetime/${oneTimeChore.id}`} key={oneTimeChore.id}>
            <OneTimeEventCard chore={oneTimeChore} />
          </Link>
        ))}
      </div>
    </StyledOneTimeEventCards>
  );
};

export default OneTimeEventCards;
