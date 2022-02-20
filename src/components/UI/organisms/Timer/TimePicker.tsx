import { Swiper, SwiperSlide } from 'swiper/react';
import React, { MutableRefObject } from 'react';
import { useRef } from 'react';

import '../../../../styles/timepicker.css';
import { stringify } from 'querystring';
const hours = Array.from(Array(12).keys());
const minutes = Array.from(Array(60).keys());
const ap = ['오전', '오후'];

export interface ITimerProps {
  visible: boolean;
}
const TimePicker = React.forwardRef((props: ITimerProps, reff: any) => {
  let ref = useRef<{ 시간대: string; 시: number; 분: number }>({ 시간대: '', 시: 0, 분: 0 });
  const { visible } = props;
  if (visible) {
    return (
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
                          {isActive ? <div className="active">{value}</div> : <div className="noneactive">{value}</div>}
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
            <button className="pickerbutton" onClick={() => console.log(ref)}>
              선택 완료
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
});

export default TimePicker;
