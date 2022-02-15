import Title from '../../atoms/Title/Title';
import {
  CategoryModalWrapper,
  ChooseCategoryModalImgWrapper,
  StyledChooseCatagoryModal,
} from './ChooseCatagoryModalStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import basket from '../../../../src_assets/basket.svg';
import pail from '../../../../src_assets/pail.svg';
import Button from '../../atoms/Button/Button';
import { Dispatch, SetStateAction } from 'react';

const categoryImgURLs = [
  { src: basket, id: 1, category: '빨래' },
  { src: pail, id: 2, category: '청소' },
];

export interface IMoleChooseCatagoryModalProps {
  onClick: (category: { src: string; id: number; category: string }) => void;
  checkCategory?: string;
  setShowCategoryModal: Dispatch<SetStateAction<boolean>>;
}

const ChooseCatagoryModal = ({ onClick, checkCategory, setShowCategoryModal }: IMoleChooseCatagoryModalProps) => {
  return (
    <CategoryModalWrapper>
      <StyledChooseCatagoryModal>
        <div className="chooseCategoryModal_header">
          <Title color="#3F4245" fontSize="17px">
            이미지 선택하기
          </Title>
          <span>이미지 추가</span>
        </div>
        <div className="chooseCategoryModal_swiper">
          <Swiper slidesPerView={'auto'} className="mySwiper" spaceBetween={10}>
            {categoryImgURLs.map((categoryImgURL) => (
              <SwiperSlide key={categoryImgURL.id}>
                <ChooseCategoryModalImgWrapper
                  check={checkCategory === categoryImgURL.category}
                  onClick={() => onClick(categoryImgURL)}
                >
                  <img src={categoryImgURL.src} />
                  <span>{categoryImgURL.category}</span>
                </ChooseCategoryModalImgWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button onClick={() => setShowCategoryModal((prev) => !prev)} className="basic">
          선택 완료
        </Button>
      </StyledChooseCatagoryModal>
    </CategoryModalWrapper>
  );
};

export default ChooseCatagoryModal;
