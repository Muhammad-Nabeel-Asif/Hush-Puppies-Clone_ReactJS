import React, { useMemo } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  const images = useMemo(
    () => [
      {
        src: "//cdn.shopify.com/s/files/1/0016/0074/9623/files/Main-Banner-1920x720-SS22-updated_1_1300x700.jpg?v=1649224486",
        alt: "lg_img",
        id: 1,
      },
      {
        src: "//cdn.shopify.com/s/files/1/0016/0074/9623/files/Main_Banner_1338x666_2_1300x700.jpg?v=1641462975",
        alt: "lg_img",
        id: 2,
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/files/3_fc89229e-6164-41c6-b507-346f47377dc6_1300x700.jpg?v=1641802396",
        alt: "lg_img",
        id: 3,
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0016/0074/9623/files/Main-Banner-1920x720-Eid_1300x700.jpg?v=1650869891",
        alt: "lg_img",
        id: 4,
      },
    ],
    []
  );

  return (
    <div className="swiper_container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.src} alt={item.alt} className="images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
