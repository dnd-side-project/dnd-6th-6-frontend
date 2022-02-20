import DatePicker from 'react-datepicker';
import React, { forwardRef, useState, useRef, Dispatch, SetStateAction } from 'react';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../../styles/calendar.css';

export interface IOrgCalendarProps {
  startDate: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date | undefined>>;
  setDateErrorMessage: Dispatch<SetStateAction<string>>;
}

function Calendar({ startDate, setStartDate, setDateErrorMessage }: IOrgCalendarProps) {
  registerLocale('ko', ko);
  const CustomInput = forwardRef<any, any>(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className="CustomInput">
      <div className={!startDate ? 'value' : 'selectValue'}>{value || '날짜를 선택해주세요'}</div>
      <div className="icon">
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 9.50164H4.66667V11.6131H7V9.50164ZM11.6667 9.50164H9.33333V11.6131H11.6667V9.50164ZM16.3333 9.50164H14V11.6131H16.3333V9.50164ZM18.6667 2.11148H17.5V0H15.1667V2.11148H5.83333V0H3.5V2.11148H2.33333C1.03833 2.11148 0.0116667 3.06164 0.0116667 4.22295L0 19.0033C0 20.1646 1.03833 21.1148 2.33333 21.1148H18.6667C19.95 21.1148 21 20.1646 21 19.0033V4.22295C21 3.06164 19.95 2.11148 18.6667 2.11148ZM18.6667 19.0033H2.33333V7.39016H18.6667V19.0033Z"
            fill="#5B6574"
          />
        </svg>
      </div>
    </button>
  ));
  const calendar = useRef<any>(null);

  const closeDatePicker = () => {
    console.log(startDate);
    calendar.current.setOpen(false);
    setDateErrorMessage('');
  };
  return (
    <>
      <DatePicker
        shouldCloseOnSelect={false}
        selected={startDate}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        minDate={new Date()}
        onChange={(date: Date) => setStartDate(date)}
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
            <div className="btn_month btn_month-next" onClick={increaseMonth} aria-disabled={nextMonthButtonDisabled}>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12.7485L1.21337 14L8 7L1.21337 9.53674e-07L0 1.25152L5.57326 7L0 12.7485Z" fill="#87C5FF" />
              </svg>
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
