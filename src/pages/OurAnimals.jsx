import React, { useState } from 'react';
import AdoptionForm from '../components/AdoptionForm';

function OurAnimals() {
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);

  const toggleAdoptionForm = () => {
    setShowAdoptionForm(!showAdoptionForm);
  };

  const handleSubmit = async (values, actions) => {
    // Your submission logic here

    actions.resetForm();
    setShowAdoptionForm(false);
  }
  
  return (
    <div>
      <h2>Our Animals</h2>
      PET LISTING !!!
      <button onClick={toggleAdoptionForm}>Adopt Now</button>

      
      {showAdoptionForm && <AdoptionForm onSubmit={handleSubmit} />}
      
      
    </div>
  );
}

export default OurAnimals;
