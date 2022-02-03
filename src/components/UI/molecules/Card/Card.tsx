import Avatar from '../../atoms/Avatar/Avatar';
import Title from '../../atoms/Title/Title';
import { StyledCard } from './CardStyled';

export interface IMoleCardProps {
  content: string;
  avatarName?: string;
  avatarUrl?: string;
}

const Card = (props: IMoleCardProps) => {
  return (
    <StyledCard>
      <Avatar name={props.avatarName} imgUrl={props.avatarUrl} />
      <Title fontWeight="600" fontSize="1rem">
        {props.content}
      </Title>
    </StyledCard>
  );
};

export default Card;
