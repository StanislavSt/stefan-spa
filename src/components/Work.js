// Import Swiper React components
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { tooltipOnHover, onMouseEnter } from '../tooltipOnHover';


export const Work = ({ img, images, header, content, location, credits, video }) => {

  const [swiper, setSwiper] = useState(null)
  const clientY = useRef(null)

  const onMouseMove = (e) => {
    clientY.current = e.clientY
    tooltipOnHover(e)
  }



  useEffect(() => {
    const clearEvents = () => {
      window.removeEventListener("mousemove", onMouseMove)
      // window.removeEventListener('wheel', onScrollMove)
    }
    window.addEventListener('mousemove', onMouseMove)
    // window.addEventListener('wheel', onScrollMove)

    return () => clearEvents();
  }, []);

  return (
    <div className="container" onMouseOver={(e) => onMouseEnter(e)}>
      <div className="content-small">
        <div className="header" style={{ textAlign: "left" }}>
          {header}
        </div>
        <div style={{ textAlign: "left" }}>
          {content}
        </div>
        <div style={{ textAlign: "left" }}>
          {location}
        </div>
        <div style={{ textAlign: "left" }}>
          {credits}
        </div>
      </div>
      {img ? <img alt="miscible" src={img}></img> : null}
      {images ? (
        <div className="swip-container">
          <Swiper
            onInit={(e) => setSwiper(e)}
            slidesPerView={1}
            onSwiper={(swiper) => { }}
            onSlideChange={() => { }}
            onClick={() => swiper.slideNext()}
            loop
          >
            {video ? (
              <SwiperSlide key={1234}>
                <video
                  className="video dot"
                  src={video}
                  type="video/mp4"
                  autoPlay
                  loop
                  muted
                />
              </SwiperSlide>
            ) : null}
            {images.map((i, index) => (
              <SwiperSlide key={index}>
                <img className="dot" alt="swiper-img" src={i}></img>

              </SwiperSlide>
            ))}

          </Swiper>{" "}
        </div>
      ) : null
      }
      <div className="content-large">
        <div className="header" style={{ textAlign: "left" }}>
          {header}
        </div>
        <div className="contentt" style={{ textAlign: "left" }}>
          {content}
        </div>
        <div className="contentt" style={{ textAlign: "left" }}>
          {location}
        </div>
        <div className="contentt" style={{ textAlign: "left" }}>
          {credits}
        </div>
      </div>


    </div >
  );
};
