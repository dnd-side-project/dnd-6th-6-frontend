import DatePicker from 'react-datepicker';
import React, { forwardRef, useState, useRef } from 'react';
import '../../../../styles/calendar.css';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar() {
  const [startDate, setStartDate] = useState();
  registerLocale('ko', ko);
  const CustomInput = forwardRef<any, any>(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className="CustomInput">
      <div className="value">{value || '날짜를 선택해주세요'}</div>
      <div className="icon">🗓</div>
    </button>
  ));

  const calendar = useRef<any>(null);

  const closeDatePicker = () => {
    calendar.current.setOpen(false);
  };
  return (
    <>
      <DatePicker
        className="datepicker"
        shouldCloseOnSelect={false}
        selected={startDate}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        minDate={new Date()}
        onChange={(date: any) => setStartDate(date)}
        customInput={<CustomInput />}
        withPortal
        ref={calendar}
        renderCustomHeader={({
          date,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div className="customHeader">
            <div className="btn_month btn_month-prev" onClick={decreaseMonth} aria-disabled={prevMonthButtonDisabled}>
              &lt;
            </div>
            <div className="month-day">
              {getYear(date)}.{getMonth(date) < 9 ? `0${getMonth(date) + 1}` : `${getMonth(date) + 1}`}
            </div>
            <div className="btn_month btn_month-next" onClick={increaseMonth} aria-disabled={nextMonthButtonDisabled}>
              &gt;
            </div>
          </div>
        )}
      >
        <div className="buttonwrapper">
          <button className="pickerbutton" onClick={closeDatePicker}>
            선택 완료
          </button>
        </div>
      </DatePicker>
    </>
  );
}
export default Calendar;
