import { Swiper, SwiperSlide } from 'swiper/react';
import React, { forwardRef, useState } from 'react';
import { useRef } from 'react';

import '../../../../styles/timepicker.css';
import { ReactComponent as TimerIcon } from '../../../../src_assets/TimerIcon.svg';
const hours = Array.from(Array(12).keys());
const minutes = Array.from(Array(60).keys());
const ap = ['오전', '오후'];

export interface ITimerProps {}
const TimePicker = forwardRef((props: ITimerProps, ref: any) => {
  const [visible, setvisible] = useState(false);
  const showTimer = () => {
    setvisible(!visible);
  };
  return (
    <>
      <button type="button" className="TimerInput" onClick={showTimer}>
        {ref.current.시간대 == '' ? (
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
      {visible && (
        <div className="portal">
          <div className="timePickerWrapper">
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
              <button className="pickerbutton" onClick={showTimer}>
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
