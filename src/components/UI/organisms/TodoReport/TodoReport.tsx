import { useState, useEffect } from 'react';
import { StyledTodoReport, ReportBoxItem, PercentBarInner, StyledCalendar } from './TodoReportStyled';
import Button from '../../atoms/Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import { Chore } from '../../../../interfaces/chore';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import moment from 'moment';
import { categoryImgURLs } from '../../../../utils/category';

const TodoReport = () => {
  const queryClient = useQueryClient();
  const me: any = queryClient.getQueryData('me');
  const { isFetching, data: mycompleteChore } = useQuery<Chore[]>(
    'mycompleteChore',
    () =>
      axios
        .get(`houses/${me?.user_profile.house?.id}/chores/completed?start_dt=${sendstartDate}&end_dt=${sendendDate}`)
        .then((res) => res.data),
    {
      enabled: !!me,
    },
  );
  const [dateRange, setDateRange] = useState<Array<Date | any>>([
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    new Date(),
  ]);
  const [startDate, endDate] = dateRange;
  const [sendstartDate, sendendDate] = [
    moment(startDate).format('YYYY-MM-DD 00:00'),
    moment(endDate).format('YYYY-MM-DD 23:59'),
  ];
  const colorlist = ['#1470FB', '#57A8EF', '#4BBEFF', '#76DEFF', '#87C5FF', '#739BC2'];
  const TodoType = ['전체', '요리하기', '청소하기', '세탁하기', '장보기', '쓰레기 버리기', '일회성'];
  const eventCount: any = {};
  for (let i = 1; i < TodoType.length; i++) {
    eventCount[TodoType[i]] = mycompleteChore?.filter((e) => e.information.category.name == TodoType[i]).length;
  }
  const [selectedType, setSelectedType] = useState('전체');
  let total: any = mycompleteChore?.length;

  useEffect(() => {
    console.log('이거맞음?');
    queryClient.refetchQueries(['mycompleteChore']);
  }, [endDate]);

  if (!mycompleteChore) {
    return <div>에러에러 초비상</div>;
  }

  return (
    <StyledTodoReport>
      <div className="TodoReportHeader">
        <div className="TodoReportTitle">가사 리포트</div>
        <StyledCalendar>
          <DatePicker
            locale={ko}
            dateFormat={'MM월 dd일'}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            withPortal
            onChange={(update) => {
              setDateRange(update);
            }}
            renderCustomHeader={({
              date,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
              decreaseMonth,
              increaseMonth,
            }) => (
              <div className="customHeader">
                <div
                  className="btn_month btn_month-prev"
                  onClick={decreaseMonth}
                  aria-disabled={prevMonthButtonDisabled}
                >
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 1.25152L6.78663 1.18661e-06L-1.22392e-06 7L6.78663 14L8 12.7485L2.42673 7L8 1.25152Z"
                      fill="#87C5FF"
                    />
                  </svg>
                </div>
                <div className="month-day">
                  {getYear(date)}.{getMonth(date) < 9 ? `0${getMonth(date) + 1}` : `${getMonth(date) + 1}`}
                </div>
                <div
                  className="btn_month btn_month-next"
                  onClick={increaseMonth}
                  aria-disabled={nextMonthButtonDisabled}
                >
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 12.7485L1.21337 14L8 7L1.21337 9.53674e-07L0 1.25152L5.57326 7L0 12.7485Z"
                      fill="#87C5FF"
                    />
                  </svg>
                </div>
              </div>
            )}
          />
        </StyledCalendar>
      </div>
      <Swiper slidesPerView={3.3} spaceBetween={10} className="mySwiper">
        {TodoType.map((type, index) => (
          <SwiperSlide>
            {selectedType == type ? (
              <Button
                width="90px"
                height="33px"
                bgColor="#5BADFF"
                color="white"
                onClick={() => setSelectedType(type)}
                key={index}
              >
                {type}
              </Button>
            ) : (
              <Button
                width="90px"
                height="33px"
                bgColor="#E1EAF9"
                color="#B2BDD0"
                onClick={() => setSelectedType(type)}
                key={index}
              >
                {type}
              </Button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="TypeCounter">
        <span className="TypeCounterName">{selectedType} 수행횟수</span>
        <span className="Count">
          {selectedType == '전체'
            ? total
            : mycompleteChore?.filter((e) => e.information.category.name == selectedType).length}
        </span>
      </div>
      <div className="PercentBar">
        {selectedType == '전체'
          ? Object.keys(eventCount).map((e, index) => (
              <PercentBarInner percentage={eventCount[e] / total} bgColor={colorlist[index]} line={index} />
            ))
          : Object.keys(eventCount).map((e, index) =>
              e == selectedType ? (
                <PercentBarInner percentage={eventCount[e] / total} bgColor={colorlist[index]} line={index} />
              ) : (
                <PercentBarInner percentage={eventCount[e] / total} bgColor={'#E1EAF9'} line={index} />
              ),
            )}
      </div>
      <div className="ReportBox">
        {mycompleteChore?.map((element, index) => (
          <ReportBoxItem key={index}>
            <div className="boxWrapper">
              {element.information.category.name === '세탁하기' && (
                <img src={categoryImgURLs[0].src} width={24} height={24} />
              )}
              {element.information.category.name === '청소하기' && (
                <img src={categoryImgURLs[1].src} width={24} height={24} />
              )}
              {element.information.category.name === '쓰레기 버리기' && (
                <img src={categoryImgURLs[2].src} width={24} height={24} />
              )}
              {element.information.category.name === '요리하기' && (
                <img src={categoryImgURLs[3].src} width={24} height={24} />
              )}
              {element.information.category.name === '장보기' && (
                <img src={categoryImgURLs[4].src} width={24} height={24} />
              )}
              {element.information.category.name === '일회성' && (
                <img src={categoryImgURLs[5].src} width={24} height={24} />
              )}
              <span className="todoname">{element.information.name}</span>
            </div>
            <div className="todotime">{moment(element.completed_at).format('MM월 DD일 hh시 mm분')}</div>
          </ReportBoxItem>
        ))}
      </div>
    </StyledTodoReport>
  );
};

export default TodoReport;
