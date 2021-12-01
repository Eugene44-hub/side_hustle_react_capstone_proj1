import React from 'react';
import './App.css';

const Tours = ({ tours }) => {

   return (
      <div className='tours_wrapper'>
         {/* Mapping through the Tour State */}
         {tours.map((tour) => (
            <div key={tour.id} className='card'>
               <img src={tour.image} alt={tour.name} className='tour_img' />
               <h2 className='tour_title'>{tour.name}</h2>
               <p className='tour_info'>{tour.info}</p>
               <h4 className='tour_price'>{tour.price}</h4>
               <button type='button'></button>
            </div>
         ))}
      </div>
   );
};

export default Tours;
