import { Swiper, SwiperSlide } from 'swiper/react';
import React, { forwardRef, useState } from 'react';
import '../../../../styles/timepicker.css';
import { ReactComponent as TimerIcon } from '../../../../src_assets/TimerIcon.svg';
import { Chore } from '../../../../interfaces/chore';
import moment from 'moment';
import { editChoreAPI } from '../../../../apis/chore';
const hours = Array.from(Array(12).keys());
const minutes = Array.from(Array(60).keys());
const ap = ['오전', '오후'];

export interface ITimerProps {
  isToDayEdit?: boolean;
  chore?: Chore;
}
const TimePicker = forwardRef(({ isToDayEdit, chore }: ITimerProps, ref: any) => {
  const [visible, setvisible] = useState(false);
  const showTimer = () => {
    setvisible(!visible);
  };
  const onClickPortal = () => {
    ref.current.시간대 = '';
    setvisible((prev) => !prev);
  };
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  const editChoreTime = () => {
    if (chore) {
      const currentday = moment(chore.planned_at).format('YYYY/MM/DD');
      const currentTime =
        ref.current.시간대 === '오전'
          ? `0${ref.current.시}:${ref.current.분}`
          : `${ref.current.시 + 12}:${ref.current.분}`;
      const planned_at = moment(`${currentday} ${currentTime}`, 'YYYY/MM/DD HH:mm').toDate();
      console.log(planned_at);
      editChoreAPI({
        houseId: chore.assignees[0].user_profile.house?.id as number,
        choreId: chore.id,
        assignees: chore.assignees,
        name: chore.information.name,
        categoryId: chore.information.category.id,
        planned_at,
      })
        .then((response) => console.log(response.data))
        .catch((error) => {
          console.log(error);
          ref.current.시간대 = '';
        })
        .finally(() => setvisible(!visible));
    }
  };
  return (
    <>
      {!isToDayEdit ? (
        <button type="button" className="TimerInput" onClick={showTimer}>
          {ref.current.시간대 === '' ? (
            <div className="value">시간을 입력해주세요</div>
          ) : (
            <div className="selectValue">
              {ref.current.시간대} {ref.current.시}시 {ref.current.분}분
            </div>
          )}
          <div className="icon">
            <TimerIcon />
          </div>
        </button>
      ) : (
        <div className="todayEditTime" onClick={showTimer}>
          {ref.current.시간대 == '' ? (
            <span>
              {chore?.completed_at
                ? `${moment(chore?.completed_at).format('HH:MM 완료')}`
                : `${moment(chore?.planned_at).format('HH시 시작 예정')}`}
            </span>
          ) : (
            <span>
              {ref.current.시간대} {ref.current.시}시 시작 예정
            </span>
          )}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3 13.9809L14.3162 15L20 9.3L14.3162 3.6L13.3 4.61909L17.9676 9.3L13.3 13.9809Z"
              fill="#C0C5CC"
            />
          </svg>
        </div>
      )}
      {visible && (
        <div className="portal" onClick={onClickPortal}>
          <div className="timePickerWrapper" onClick={onClickModal}>
            <div className="title">시작 시간</div>
            <div className="timePicker">
              <div className="picker">
                <Swiper
                  slidesPerView={2}
                  direction="vertical"
                  centeredSlides
                  grabCursor
                  loop
                  autoplay
                  onSlideChange={(swiper) => (ref.current.시간대 = `${swiper.realIndex == 0 ? '오전' : '오후'}`)}
                >
                  {ap.map((value) => {
                    return (
                      <SwiperSlide key={value}>
                        {({ isActive }) => (
                          <div className="time">
                            {isActive ? (
                              <div className="active">{value}</div>
                            ) : (
                              <div className="noneactive">{value}</div>
                            )}
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="picker">
                <Swiper
                  slidesPerView={2}
                  direction="vertical"
                  centeredSlides
                  grabCursor
                  loop
                  loopedSlides={60}
                  autoplay
                  onSlideChange={(swiper) => (ref.current.시 = swiper.realIndex)}
                >
                  {hours.map((hour) => {
                    return (
                      <SwiperSlide key={hour}>
                        {({ isActive }) => (
                          <div className="time">
                            {isActive ? (
                              <div className="active">{('' + hour).padStart(2, '0')}</div>
                            ) : (
                              <div className="noneactive">{('' + hour).padStart(2, '0')}</div>
                            )}
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div>:</div>
              <div className="picker">
                <Swiper
                  slidesPerView={2}
                  direction="vertical"
                  grabCursor
                  centeredSlides
                  loop
                  loopedSlides={60}
                  onSlideChange={(swiper) => (ref.current.분 = swiper.realIndex)}
                >
                  {minutes.map((minute) => {
                    return (
                      <SwiperSlide key={minute}>
                        {({ isActive }) => (
                          <div className="time">
                            {isActive ? (
                              <div className="active">{('' + minute).padStart(2, '0')}</div>
                            ) : (
                              <div className="noneactive">{('' + minute).padStart(2, '0')}</div>
                            )}
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className="buttonwrapper">
              <button className="pickerbutton" onClick={!isToDayEdit ? showTimer : editChoreTime}>
                선택 완료
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default TimePicker;
