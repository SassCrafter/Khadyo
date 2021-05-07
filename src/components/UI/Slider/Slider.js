import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination]);

function Slider({ children, className, renderSlides, ...restProps }) {
  return (
    <Swiper className={className} {...restProps}>
      {renderSlides ? renderSlides(SwiperSlide) : null}
      {children}
    </Swiper>
  );
}

export default Slider;
