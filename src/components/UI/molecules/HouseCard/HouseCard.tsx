import CardButton from '../../atoms/CardButton/CardButton';
import Title from '../../atoms/Title/Title';
import { StyledHouseCard } from './HouseCardStyled';

export interface IMoleHouseCardProps {
  completed_at: string | null; //completed_at: Date | null;
  event_title: string;
  first_name: string;
}

const HouseCard = (props: IMoleHouseCardProps) => {
  return (
    <StyledHouseCard>
      <div className="houseCard_info">
        <div className="complete_or_not">
          {props.completed_at ? (
            <>
              <CardButton className="houseComplete">완료</CardButton>
              <span>{props.completed_at}</span>
            </>
          ) : (
            <CardButton className="houseIncomplete">미완료</CardButton>
          )}
        </div>
        <Title fontWeight="400" fontSize="13px" color="#3F4245">
          {props.completed_at
            ? `${props.first_name}님이 ${props.event_title} 하기를 완료했어요.`
            : `${props.first_name}님이 ${props.event_title} 하기가 미완료 상태에요.`}
        </Title>
      </div>
      <div>
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.978829 12.8922L2.21446 14.1218L8.87438 7.00113L1.96323 0.124043L0.772513 1.39713L6.44804 7.04468L0.978829 12.8922Z"
            fill="#7A7F84"
          />
        </svg>
      </div>
    </StyledHouseCard>
  );
};

export default HouseCard;
