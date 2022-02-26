import Title from '../../atoms/Title/Title';
import { EmojiModalWrapper, ChooseEmojiModalImgWrapper, StyledChooseEmojiModal } from './ChooseEmojiModalStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import basket from '../../../../src_assets/basket.svg';
import pail from '../../../../src_assets/pail.svg';
import heart from '../../../../src_assets/heart.svg';
import Button from '../../atoms/Button/Button';
import React, { Dispatch, SetStateAction } from 'react';
import { emojiImgURLs } from '../../../../utils/emoji';

export interface IMoleChooseEmojiModalProps {
  onClick: (emoji: { src: string; id: number; emoji: string }) => void;
  checkEmoji?: string;
  setShowEmojiModal: Dispatch<SetStateAction<boolean>>;
}

const ChooseEmojiModal = ({ onClick, checkEmoji, setShowEmojiModal }: IMoleChooseEmojiModalProps) => {
  const onClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <EmojiModalWrapper onClick={() => setShowEmojiModal((prev) => !prev)}>
      <StyledChooseEmojiModal onClick={onClickModal}>
        <div className="chooseEmojiModal_header">
          <Title color="#3F4245" fontSize="17px">
            이모지 선택하기
          </Title>
        </div>
        <div className="chooseEmojiModal_swiper">
          <Swiper slidesPerView={'auto'} className="mySwiper" spaceBetween={10}>
            {emojiImgURLs.map((emojiImgURL) => (
              <SwiperSlide key={emojiImgURL.id}>
                <ChooseEmojiModalImgWrapper
                  check={checkEmoji === emojiImgURL.emoji}
                  onClick={() => onClick(emojiImgURL)}
                >
                  <img src={emojiImgURL.src} />
                </ChooseEmojiModalImgWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button onClick={() => setShowEmojiModal((prev) => !prev)} className="basic">
          선택 완료
        </Button>
      </StyledChooseEmojiModal>
    </EmojiModalWrapper>
  );
};

export default ChooseEmojiModal;
