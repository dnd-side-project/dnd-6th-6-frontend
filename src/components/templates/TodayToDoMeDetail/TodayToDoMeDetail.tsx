import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Chore } from '../../../interfaces/chore';
import AppLayout from '../../Layouts/Applayout';
import CompletionModal from '../../UI/molecules/CompletionModal/CompletionModal';
import Header from '../../UI/molecules/Header/Header';
import Calendar from '../../UI/organisms/Calendar/Calendar';
import TimePicker from '../../UI/organisms/Timer/TimePicker';
import { InfoWrapper, StyledTodayToDoMeDetail } from './TodayToDoMeDetailStyled';

export interface ITempTodayToDoMeDetailProps {
  chore: Chore;
}

const TodayToDoMeDetail = ({ chore }: ITempTodayToDoMeDetailProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const navigate = useNavigate();
  const ref = useRef({ 시간대: '', 시: 0, 분: 0 });
  const goBack = () => {
    navigate(-1);
  };
  // useEffect(() => {
  //   if (startDate) {
  //     const currentday = moment(startDate).format('YYYY/MM/DD');
  //     const currentTime = moment(chore.planned_at).format('HH:mm');
  //     console.log(moment(`${currentday} ${currentTime}`, 'YYYY/MM/DD HH:mm').toDate());
  //   }
  // }, [startDate]);
  // console.log(moment(chore.planned_at).format('HH:mm'));
  const onClickComplete = () => {
    setShowCompleteModal((prev) => !prev);
  };
  return (
    <AppLayout>
      <StyledTodayToDoMeDetail>
        <Header onClick={goBack} title={`${chore.information.name}`} mb="43px" />
        <div className="todayToDoMeDatail_image"></div>
        <div className="todayToDoMeDatail_info">
          <div className="todayToDoMeDatail_calender">
            <h5>날짜</h5>
            <InfoWrapper>
              <Calendar chore={chore} startDate={startDate} setStartDate={setStartDate} isToDayEdit={true} />
            </InfoWrapper>
          </div>
          <div className="todayToDoMeDatail_time">
            <h5>시작 시간</h5>
            <InfoWrapper>
              <TimePicker chore={chore} ref={ref} isToDayEdit={true} />
            </InfoWrapper>
          </div>
          <div className="todayToDoMeDatail_state">
            <h5>상태</h5>
            <InfoWrapper>
              {!chore.completed_at ? <span onClick={onClickComplete}>미완료</span> : <span>완료</span>}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3 13.9809L14.3162 15L20 9.3L14.3162 3.6L13.3 4.61909L17.9676 9.3L13.3 13.9809Z"
                  fill="#C0C5CC"
                />
              </svg>
            </InfoWrapper>
          </div>
          <div className="todayToDoMeDatail_favor">
            <h5>부탁하기</h5>
            <Link to={`/request/${chore.id}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3 13.9809L14.3162 15L20 9.3L14.3162 3.6L13.3 4.61909L17.9676 9.3L13.3 13.9809Z"
                  fill="#C0C5CC"
                />
              </svg>
            </Link>
          </div>
        </div>
      </StyledTodayToDoMeDetail>
      {showCompleteModal && (
        <CompletionModal
          chore={chore}
          setShowCompletionModal={setShowCompleteModal}
          showCompletionModal={showCompleteModal}
        />
      )}
    </AppLayout>
  );
};

export default TodayToDoMeDetail;
