import React from 'react';
import Marquee from "react-fast-marquee";
import slider1 from '../assets/slider 1.png'
import slider2 from '../assets/slider 2.png'
import slider3 from '../assets/slider 3.png'
import slider4 from '../assets/slider 4.png'


function Slider(props) {
    return (
        <>
        <Marquee pauseOnHover>
        <div className="grid grid-cols-4 gap-1 sm:gap-5 lg:gap-8 mt-2 w-full">
            <div className="w-full">
            <img src={slider1} alt="" className='w-full h-[90px] sm:h-[120px] lg:h-[140px]' />
            </div>
            <div className="w-full">
            <img src={slider2} alt="" className='w-full h-[90px] sm:h-[120px] lg:h-[140px]' />
            </div>
            <div className="w-full">
            <img src={slider3} alt="" className='w-full h-[90px] sm:h-[120px] lg:h-[140px]' />
            </div>
            <div className="w-full">
            <img src={slider4} alt="" className='w-full h-[90px] pe-1 sm:pe-5 sm:h-[120px] lg:h-[140px]' />
            </div>
            </div>
        </Marquee>

        </>
    );
}

export default Slider;