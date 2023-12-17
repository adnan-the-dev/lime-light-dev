import React from "react";
import "../sharedCss/shared.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
export const Carousal = () => {
  const imgs = [
    "https://www.limelight.pk/cdn/shop/files/final_1.jpg?v=1700655507",
    "https://www.limelight.pk/cdn/shop/files/Desktop-Banner-1920-X-600-Winter-Unstitched_1b09afe7-0cca-41a6-bf23-9d30713f276d.jpg?v=1701668727",
    'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-15 mx-auto">
            <Swiper
                autoplay={{
                  delay: 3000,

                }}
                Navigation={true}
                modules={[Navigation,Autoplay]}
                loop={true}
                className="mySwiper"
              >
                {imgs.map((img) => (
                  <SwiperSlide style={{height: '400px'}}>
                    <img src={img} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
