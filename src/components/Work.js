// Import Swiper React components
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { tooltipOnHover, onScroll, onMouseEnter } from '../tooltipOnHover';


export const Work = ({ img, images, header, content, location, video }) => {

  const [swiper, setSwiper] = useState(null)
  const clientY = useRef(null)

  const onMouseMove = (e) => {
    clientY.current = e.clientY
    tooltipOnHover(e)
  }

  const clearEvents = () => {
    window.removeEventListener("mousemove", onMouseMove)
    // window.removeEventListener('wheel', onScrollMove)
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    // window.addEventListener('wheel', onScrollMove)

    return () => clearEvents();
  }, []);

  return (
    <div className="container" onMouseOver={(e) => onMouseEnter(e)}>
      {video ? (
        <video
          className="video dot"
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
        <div className="header" style={{ textAlign: "left" }}>
          {header}
        </div>
        <div className="contentt" style={{ textAlign: "left" }}>
          {content}
        </div>
        <div className="contentt" style={{ textAlign: "left" }}>
          {location}
        </div>
      </div>

    </div >
  );
};
