import { Swiper } from "swiper/react";
import { Container } from "./style";

import "swiper/css";
import "swiper/css/grid";
import { Navigation } from "swiper/modules";

export function Category({ type, children }) {
  const scr = screen.width;

  return (
    <Container>
      <h5>{type}</h5>
      <Swiper
        grabCursor={true}
        loop={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          "@0.50": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.40": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@2.30": {
            slidesPerView: 4,
            spaceBetween: 160,
          },
        }}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </Container>
  );
}
