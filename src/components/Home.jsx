
import React from 'react';
import front from '../assets/front.jpg'
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const redirect=useNavigate()
    return (
      <>
      {/* Hero section */}
      <div className="front-section">
            <div className="front-text">
            <h1 className='font-bold'> Welcome to <br/> Our VegiFruit Shop </h1>
            <p>Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.
            Fruit normally means the seed-associated fleshy structures (or produce) of plants that typically are sweet or sour and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries.</p>
            <button onClick={()=>redirect('/shop')}>Shop Now</button>
            </div>
            <div className="front-img">
            <img src={front} alt="" />
            </div>
        </div>
      </>
    );
}

export default Home;