import videoItem from '../video/karthecv-campaign.webm';
import { useEffect, useRef } from 'react';

export default function MyShop() {
    const vidRef = useRef(null)
    const handleOnClick = () => {
        vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause()
    }
    useEffect(() => {
        vidRef.current.play()
    })
    return (<div>
        <div className="big-image">
            <video ref={vidRef}  loop onClick={() => handleOnClick()} autoplay playsinline >
                <source src={videoItem} />
            </video>
        </div>
    </div>)
}