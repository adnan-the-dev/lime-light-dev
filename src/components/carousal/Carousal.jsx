import React from "react";
import "../sharedCss/shared.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
// const imgse = useSelector((item)=>{
//   return item.productSection
// })
export const Carousal = () => {
  const imgs = [
    "https://www.limelight.pk/cdn/shop/files/final_1.jpg?v=1700655507",
    "https://www.limelight.pk/cdn/shop/files/Desktop-Banner-1920-X-600-Winter-Unstitched_1b09afe7-0cca-41a6-bf23-9d30713f276d.jpg?v=1701668727",
    "https://www.limelight.pk/cdn/shop/files/final_1.jpg?v=1700655507",
    "https://www.limelight.pk/cdn/shop/files/Desktop-Banner-1920-X-600-Winter-Unstitched_1b09afe7-0cca-41a6-bf23-9d30713f276d.jpg?v=1701668727",
  ];
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <Swiper
                Navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {imgs.map((img) => (
                  <SwiperSlide>
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
