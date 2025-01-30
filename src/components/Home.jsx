
import React, { useState } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Product from './Product';
import Filter from './Filter';

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
   <Filter onCategorySelect={handleCategorySelect}
        onVarietySelect={handleVarietySelect}/>
   <Slider/>
   <Product
          selectedCategory={selectedCategory}
          selectedVariety={selectedVariety}
        />
   </>
  ); 
}

export default Home;