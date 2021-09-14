// Import Swiper React components
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { tooltipOnHover } from '../tooltipOnHover';


export const Work = ({ img, images, header, content, location, video }) => {

  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    window.addEventListener('mousemove', tooltipOnHover)
    return () => window.removeEventListener("mousemove", tooltipOnHover);
  }, []);

  return (
    <div className="container">
      {video ? (
        <video
          className="video"
          src={video}
          type="video/mp4"
          autoPlay
          loop
          muted
        />
      ) : null}
      {img ? <img alt="miscible" src={img}></img> : null}
      {images ? (
        <div className="swip-container">
          <Swiper
            onInit={(e) => setSwiper(e)}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            onClick={() => swiper.slideNext()}
            loop
          >
            {images.map((i, index) => (
              <SwiperSlide key={index}>
                <img className="dot" alt="swiper-img" src={i}></img>

              </SwiperSlide>
            ))}
          </Swiper>{" "}
        </div>
      ) : null
      }
      <div className="content">
        <div className="header" style={{ textAlign: "right" }}>
          {header}
        </div>
        <div className="contentt" style={{ textAlign: "right" }}>
          {content}
        </div>
        <div className="contentt" style={{ textAlign: "right" }}>
          {location}
        </div>
      </div>

    </div >
  );
};
