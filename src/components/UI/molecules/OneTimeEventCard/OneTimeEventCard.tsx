import { Chore } from '../../../../interfaces/chore';
import Title from '../../atoms/Title/Title';
import { StyledOneTimeEventCard } from './OneTimeEventCardStyled';

const Chore = {};

export interface IMoleOneTimeEventCardProps {
  chore: Chore;
}

const OneTimeEventCard = (props: IMoleOneTimeEventCardProps) => {
  return (
    <StyledOneTimeEventCard>
      <Title></Title>
    </StyledOneTimeEventCard>
  );
};

export default OneTimeEventCard;
