import videoItem from "../video/karthecv-campaign.webm";
import { useEffect, useRef } from "react";
import { Product } from "./Product";
import products from "../products.json";

export default function MyShop() {
  const vidRef = useRef(null);
  const handleOnClick = () => {
    vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
    vidRef.current.muted = false;
  };
  useEffect(() => {
    console.log(vidRef);
    vidRef.current.play();
  }, []);
  console.log(products)
  return (
    <div>
      <div className="big-image" style={{ cursor: "pointer" }}>
        <video
          ref={vidRef}
          loop
          onClick={() => handleOnClick()}
          autoplay
          muted
          playsinline
        >
          <source src={videoItem} />
        </video>
      </div>
      <div className="products-container">
      {products.map((product) => (
        <Product pp={product} id={product.id} />
      ))}
      </div>
    </div>
  );
}
