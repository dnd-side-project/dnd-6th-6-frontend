import { ChooseCategoryImgWrapper, StyledCategories } from './CategoriesStyled';
import basket from '../../../../src_assets/basket.svg';
import pail from '../../../../src_assets/pail.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { categoryImgURLs } from '../../../../utils/category';

export interface IMoleCategoriesProps {
  onClick: (category: { src: string; id: number; category: string }) => void;
  checkCategory?: string;
}

const Categories = ({ onClick, checkCategory }: IMoleCategoriesProps) => {
  return (
    <StyledCategories>
      <Swiper slidesPerView={'auto'} className="mySwiper" spaceBetween={10}>
        {categoryImgURLs.map((categoryImgURL) => (
          <SwiperSlide key={categoryImgURL.id}>
            <ChooseCategoryImgWrapper
              check={checkCategory === categoryImgURL.category}
              onClick={() => onClick(categoryImgURL)}
            >
              <img src={categoryImgURL.src} />
              <span>{categoryImgURL.category}</span>
            </ChooseCategoryImgWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCategories>
  );
};

export default Categories;
