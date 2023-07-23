import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';
import '../css/style.css';
import '../css/responsive.css';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./slider_img', false, /\.(png|jpe?g|svg)$/));

export const Slider = () => {
    return (
        <div className='slider' >
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src={images['1.jpg']} alt="error" /></SwiperSlide>
                <SwiperSlide><img src={images['2.jpg']} alt="error" /></SwiperSlide>
                <SwiperSlide><img src={images['3.jpg']} alt="error" /></SwiperSlide>
                <SwiperSlide><img src={images['4.jpg']} alt="error" /></SwiperSlide>
                <SwiperSlide><img src={images['5.jpg']} alt="error" /></SwiperSlide>
                <SwiperSlide><img src={images['6.jpg']} alt="error" /></SwiperSlide>
            </Swiper>
        </div>
    );
}