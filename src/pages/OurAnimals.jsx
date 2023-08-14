import React, { useState } from 'react';
import AdoptionForm from '../components/AdoptionForm';

function OurAnimals() {
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);

  const toggleAdoptionForm = () => {
    setShowAdoptionForm(!showAdoptionForm);
  };

  return (
    <div>
      <h2>Our Animals</h2>
      PET LISTING !!!
      <button onClick={toggleAdoptionForm}>Adopt Now</button>

      
      {showAdoptionForm && <AdoptionForm />}
      
      
    </div>
  );
}

export default OurAnimals;
