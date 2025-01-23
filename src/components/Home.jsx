
import React, { useState } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Product from './Product';

function Home(props) {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVariety, setSelectedVariety] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedVariety(null); // Reset variety when a new category is selected
  };

  const handleVarietySelect = (variety) => {
    setSelectedVariety(variety);
  };

  return (
   <>
   <Slider/>
   <div className="flex">
      <Sidebar
        onCategorySelect={handleCategorySelect}
        onVarietySelect={handleVarietySelect}
      />
      <div className="flex-1 ml-0 md:ml-72 overflow-y-auto">
        <Product
          selectedCategory={selectedCategory}
          selectedVariety={selectedVariety}
        />
      </div>
    </div>
   </>
  ); 
}

export default Home;