import moment from 'moment';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Title from '../../atoms/Title/Title';
import { MonthBox, StyledMonthSelect } from './MonthSelectStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../atoms/Button/Button';
const startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');
const endOfMonth = moment().endOf('month').format('YYYY-MM-DD hh:mm');

export interface IMoleMonthSelectProps {
  isShowMonthSelect: boolean;
  setIsShowMonthSelect: Dispatch<SetStateAction<boolean>>;
  onClick: (month: number) => void;
}

const MonthSelect = ({ setIsShowMonthSelect, isShowMonthSelect, onClick }: IMoleMonthSelectProps) => {
  const [selectMonth, setSelectMonth] = useState<number>();
  function getMonthDateRange(year: number, month: number) {
    var startDate = moment([year, month - 1]);
    var endDate = moment(startDate).endOf('month');
    console.log(startDate.toDate());
    console.log(endDate.toDate());
    return { start: startDate, end: endDate };
  }
  const onClickMonth = (monthNumber: number) => {
    getMonthDateRange(2022, monthNumber);
  };
  const onCloseBtn = () => {
    setIsShowMonthSelect((prev) => !prev);
  };

  const onClickSwiper = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <StyledMonthSelect onClick={onCloseBtn}>
      <div className="monthSelect" onClick={onClickSwiper}>
        <Title color="#3F4245" fontSize="17px" mb="24px">
          날짜 선택
        </Title>
        <div>
          <Swiper direction="vertical" slidesPerView={'auto'} className="mySwiper">
            {moment.monthsShort().map((month, index) => (
              <SwiperSlide key={month}>
                <MonthBox
                  onClick={() => setSelectMonth(index + 1)}
                  isChecked={selectMonth === index + 1 ? true : false}
                  className="month"
                >
                  <span>{month}</span>
                </MonthBox>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button onClick={selectMonth ? () => onClick(selectMonth) : onCloseBtn} className="basic">
          선택 완료
        </Button>
      </div>
    </StyledMonthSelect>
  );
};

export default MonthSelect;
