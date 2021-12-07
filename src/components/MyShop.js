import videoItem from "../video/karthecv-campaign.webm";
import { useRef } from "react";
import { Product } from "./Product";
import products from "../products.json";
import { useState } from "react/cjs/react.development";

export default function MyShop() {
  const [paused, setPaused] = useState(true);
  const vidRef = useRef(null);
  const handleOnClick = () => {
    vidRef.current.paused ? setPaused(false) : setPaused(true);
    vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
    vidRef.current.muted = false;
  };

  return (
    <div>
      <div className="big-image" style={{ cursor: "pointer" }}>
        <video ref={vidRef} loop onClick={() => handleOnClick()} playsinline>
          <source src={videoItem} />
        </video>
        {paused ? (
          <div class="video-overlay" onClick={() => handleOnClick()}>
            Play
          </div>
        ) : null}
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product pp={product} id={product.id} />
        ))}
      </div>
    </div>
  );
}
