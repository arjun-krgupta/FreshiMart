
import React from 'react';
import front from '../assets/background.jpg'
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const redirect=useNavigate()
    return (
      <>
      {/* Hero section */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center mt-4 md:mt-20 px-2 md:px-14">
        <div className="flex flex-col justify-start items-start gap-3 sm:gap-6 w-[96%] sm:w-[93%] md:w-[54%]">
            <h1 className='font-bold text-[36px] sm:text-[45px] md:text-6xl flex flex-col gap-0 sm:gap-3'> Welcome to <span>Our FreshiMart Shop</span> </h1>
            <p className='text-base md:text-lg font-medium'>Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.
            Fruit normally means the seed-associated fleshy structures (or produce) of plants that typically are sweet or sour and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries.</p>
            <button onClick={()=>redirect('/shop')} className='bg-black text-white outline-none border-0 px-5 py-3 uppercase text-lg font-medium'>Shop Now</button>
        </div>
        <div className="w-[75%] md:w-[43%]">
            <img src={front} alt="" className='w-full h-auto'/>
        </div>
    </div>
      </>
    );
}

export default Home;