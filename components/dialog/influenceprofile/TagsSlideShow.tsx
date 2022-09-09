import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper';
// Import Swiper styles
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

type Props = {
  tags: string[];
};

const settings = {
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
};
const TagsSlideShow: React.FC<Props> = ({ tags }) => {
  return (
    <div className='relative w-[500px]'>
      <Swiper
        slidesPerView={4}
        modules={[Navigation]}
        className='w-full'
        navigation={{
          prevEl: '.slide-next-btn',
          nextEl: '.slide-prev-btn',
        }}
      >
        {tags.map((tag: string, index: number) => (
          <SwiperSlide key={index}>
            <div className='bg-[#324951] text-[#10E98C] text-xs rounded-[5px] py-[9px] text-center my-[10px] !w-[105px] !h-[35px] mx-auto'>
              #{tag}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute top-1/2 -translate-y-1/2 right-[10px] h-[36px] w-[105px] z-40 bg-gradient-to-tr from-[#26363B00] to-[#26363BA0]' />
      <div className='absolute top-1/2 -translate-y-1/2 left-[10px] h-[36px] w-[105px] z-40 bg-gradient-to-tl from-[#26363B00] to-[#26363BA0]' />
      <div className='slide-next-btn absolute top-1/2 -translate-y-1/2 -left-8 bg-[#D9D9D933] border-2 border-[#CCCCCC80] rounded-[3px] w-[23px] h-[23px] flex justify-center items-center hover:cursor-pointer'>
        <FaAngleLeft size={13} color='white' opacity={0.8} />
      </div>
      <div className='slide-prev-btn absolute top-1/2 -translate-y-1/2 -right-8 bg-[#D9D9D933] border-2 border-[#CCCCCC80] rounded-[3px] w-[23px] h-[23px] flex justify-center items-center hover:cursor-pointer'>
        <FaAngleRight size={13} color='white' opacity={0.8} />
      </div>
    </div>
  );
};

export default TagsSlideShow;
