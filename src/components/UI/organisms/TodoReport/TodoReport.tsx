import { useState } from 'react';
import { StyledTodoReport, ReportBoxItem, PercentBarInner, StyledCalendar } from './TodoReportStyled';
import Button from '../../atoms/Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BottomNavBar from '../../molecules/BottomNavBar/BottomNavBar';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';

const TodoReport = () => {
  const [dateRange, setDateRange] = useState<Array<Date | null>>([null, null]);
  const [startDate, endDate] = dateRange;
  const eventlist = [
    { EventType: '청소', EventName: '할일이름드가야함', EventTime: '2012:00:04' },
    { EventType: '쓰레기 처리', EventName: '할일이름드가야함', EventTime: '2012:00:04' },
    { EventType: '청소', EventName: '할일이름드가야함', EventTime: '2012:00:04' },
    { EventType: '청소', EventName: '할일이름드가야함', EventTime: '2012:00:04' },
    { EventType: '청소', EventName: '할일이름드가야함', EventTime: '2012:00:04' },
    { EventType: '청소', EventName: '할일이름드가야함', EventTime: '2012:00:04' },
    { EventType: '청소', EventName: '할일이름드가야함', EventTime: '2012:00:04' },
    { EventType: '청소', EventName: '할일이름드가야함', EventTime: '2012:00:04' },
  ];

  const colorlist = ['#65A3FF', '#4BBEFF', '#76DEFF', '#76DEFF', '#76DEFF', '#76DEFF'];
  const TodoType = ['전체', '청소', '쓰레기 처리', '빨래하기', '요리하기', '설거지하기', '장보기'];
  const eventCount: any = {};
  for (let i = 1; i < TodoType.length; i++) {
    eventCount[TodoType[i]] = eventlist.filter((e) => e.EventType == TodoType[i]).length;
  }
  const [selectedType, setSelectedType] = useState('전체');
  console.log(eventCount);
  return (
    <StyledTodoReport>
      <div className="TodoReportHeader">
        <div className="TodoReportTitle">가사 리포트</div>
        <StyledCalendar>
          <DatePicker
            locale={ko}
            dateFormat="MM월 dd일"
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
                width="98px"
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
                width="98px"
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
          {selectedType == '전체' ? eventlist.length : eventlist.filter((e) => e.EventType == selectedType).length}
        </span>
      </div>
      {/* 안에 이너 추가해야함 */}
      <div className="PercentBar">
        {selectedType == '전체'
          ? Object.keys(eventCount).map((e, index) => (
              <PercentBarInner percentage={eventCount[e] / eventlist.length} bgColor={colorlist[index]} line={index} />
            ))
          : Object.keys(eventCount).map((e, index) =>
              e == selectedType ? (
                <PercentBarInner
                  percentage={eventCount[e] / eventlist.length}
                  bgColor={colorlist[index]}
                  line={index}
                />
              ) : (
                <PercentBarInner percentage={eventCount[e] / eventlist.length} bgColor={'#E1EAF9'} line={index} />
              ),
            )}
      </div>
      <div className="ReportBox">
        {eventlist.map((element, index) => (
          <ReportBoxItem key={index}>
            <div>
              <span className="typeicon">{element.EventType}</span>
              <span className="todoname">{element.EventName}</span>
            </div>
            <div className="todotime">{element.EventTime}</div>
          </ReportBoxItem>
        ))}
      </div>
      <BottomNavBar />
    </StyledTodoReport>
  );
};

export default TodoReport;
